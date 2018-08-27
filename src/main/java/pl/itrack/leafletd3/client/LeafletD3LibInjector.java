package pl.itrack.leafletd3.client;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsMethod;
import org.gwtproject.core.client.Callback;
import org.gwtproject.core.client.ScriptInjector;

import java.util.List;

/**
 * Dynamically attach to the DOM necessary resources with callback when ready
 *
 * <p>
 * MIT License
 * <p>
 * Copyright (c) 2018 <a href="https://github.com/baldram">Marcin Szalomski</a>
 * <p>
 */
public class LeafletD3LibInjector {

    private static boolean processed = false;

    // TODO: implement boolean isDevMode() to load different scripts for DEV and Prod mode

    /**
     * Load scripts in the document, in order, one after another.
     *
     * @param paths relative paths to the JS
     */
    // TODO: to consider implementing it using promises (for common API) and call Promise.all() to load all libs
    public static void injectScripts(final List<String> paths, CallbackFn callbackFn) {
        injectNextScript(paths, callbackFn);
    }

    private static void injectNextScript(final List<String> paths, CallbackFn actionWhenReady) {
        ensureInjected(paths.remove(0),
                event -> {
                    if (!paths.isEmpty()) {
                        injectNextScript(paths, actionWhenReady);
                        return;
                    }

                    if (!processed) {
                        actionWhenReady.exec();
                        processed = true;
                    }
                });
    }

    private static void ensureInjected(String url, SuccessCallback callback) {
        ScriptInjector.fromUrl(url).setWindow(ScriptInjector.TOP_WINDOW).setCallback(callback).inject();
    }

    public interface SuccessCallback extends Callback<Void, Exception> {
        @Override
        default void onFailure(Exception e) {
            log("Script loading failure: " + e.getMessage());
        }
    }

    @JsFunction
    public interface CallbackFn<T> {
        void exec();
    }

    @JsMethod(namespace = "window.console")
    public static native void log(String msg);

}
