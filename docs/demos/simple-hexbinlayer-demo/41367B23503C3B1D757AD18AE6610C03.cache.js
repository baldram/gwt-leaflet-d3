var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.DemoApp;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = '41367B23503C3B1D757AD18AE6610C03';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = {3:1, 7:1, 6:1}, $intern_1 = 4194303, $intern_2 = 17592186044416, $intern_3 = 4194304, $intern_4 = {3:1, 8:1}, $intern_5 = {3:1, 12:1, 6:1}, $intern_6 = {16:1, 37:1}, $intern_7 = {16:1, 22:1}, $intern_8 = {10:1}, $intern_9 = {3:1, 8:1, 102:1}, $intern_10 = {4:1, 3:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_0(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
}

function provide(namespace, optCtor){
  var cur = $wnd;
  if (namespace === '') {
    return cur;
  }
  var parts = namespace.split('.');
  !(parts[0] in cur) && cur.execScript && cur.execScript('var ' + parts[0]);
  if (optCtor) {
    var clazz = optCtor.prototype.___clazz;
    clazz.jsConstructor = optCtor;
  }
  for (var part; parts.length && (part = parts.shift());) {
    cur = cur[part] = cur[part] || !parts.length && optCtor || {};
  }
  return cur;
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function makeLambdaFunction(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function copyObjectProperties(from, to){
  for (var property in from) {
    to[property] === undefined && (to[property] = from[property]);
  }
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function(other){
  return this === other;
}
;
_.getClass_0 = function(){
  return this.___clazz;
}
;
_.hashCode_0 = function(){
  return getHashCode(this);
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c;
  !supportsErrorStack();
  c = new StackTraceCreator$CollectorNull;
  collector = c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(121, 1, {});
function StackTraceCreator$CollectorNull(){
}

defineClass(71, 121, {}, StackTraceCreator$CollectorNull);
function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && isJsObject(value_0);
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToJsArray(src_0){
  checkCriticalType(src_0 == null || Array.isArray(src_0));
  return src_0;
}

function castToNative(src_0, jsType){
  checkCriticalType(src_0 == null || jsinstanceOf(src_0, jsType));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfNative(src_0, jsType){
  return jsinstanceOf(src_0, jsType);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObject(src_0){
  return typeof src_0 === 'object' || typeof src_0 == 'function';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function jsinstanceOf(obj, jsType){
  return obj && jsType && obj instanceof jsType;
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function toJava(e){
  var javaException;
  if (instanceOf(e, 6)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function $isInstance_1(instance){
  var type_0;
  type_0 = typeof(instance);
  if ($equals(type_0, 'boolean') || $equals(type_0, 'number') || $equals(type_0, 'string')) {
    return true;
  }
  return instance != null && instance.$implements__java_lang_Comparable;
}

function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

function $booleanValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

function $isInstance(instance){
  $clinit_Boolean();
  return $equals('boolean', typeof(instance));
}

booleanCastMap = {3:1, 28:1};
function $isInstance_0(instance){
  if ($equals(typeof(instance), 'string')) {
    return true;
  }
  return instance != null && instance.$implements__java_lang_CharSequence;
}

function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(38, 1, {}, Class);
_.createClassLiteralForArray = function(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function(){
  return $getName(this);
}
;
_.getSimpleName = function(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function(){
  return (this.modifiers & 1) != 0;
}
;
_.modifiers = 0;
var nextSequentialId = 1;
function $isInstance_2(instance){
  return $equals('number', typeof(instance)) || instanceOfNative(instance, $wnd.java.lang.Number$impl);
}

defineClass(36, 1, {3:1, 36:1});
function $doubleValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

function $isInstance_3(instance){
  return $equals('number', typeof(instance));
}

doubleCastMap = {3:1, 28:1, 36:1};
function $fillInStackTrace(this$static){
  this$static.writetableStackTrace && this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
  return this$static;
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

function of(e){
  var throwable;
  if (e != null) {
    throwable = e['__java$exception'];
    if (throwable) {
      return throwable;
    }
  }
  return instanceOfNative(e, TypeError)?new NullPointerException_0(e):new JsException(e);
}

defineClass(6, 1, {3:1, 6:1});
_.createError = function(msg){
  return new Error(msg);
}
;
_.initializeBackingError = function(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.backingJsObject = '__noinit__';
_.writetableStackTrace = true;
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(29, 6, {3:1, 6:1}, Exception);
function RuntimeException(){
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

defineClass(7, 29, $intern_0);
function IndexOutOfBoundsException(message){
  RuntimeException_0.call(this, message);
}

defineClass(26, 7, $intern_0, IndexOutOfBoundsException);
function Integer(value_0){
  this.value_0 = value_0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(18, 36, {3:1, 28:1, 18:1, 36:1}, Integer);
_.equals_0 = function(o){
  return instanceOf(o, 18) && castTo(o, 18).value_0 == this.value_0;
}
;
_.hashCode_0 = function(){
  return this.value_0;
}
;
_.value_0 = 0;
function JsException(backingJsObject){
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this);
  this.detailMessage = backingJsObject == null?'null':toString_0(backingJsObject);
}

defineClass(20, 7, $intern_0, JsException);
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(typeError){
  JsException.call(this, typeError);
}

defineClass(34, 20, $intern_0, NullPointerException, NullPointerException_0);
_.createError = function(msg){
  return new TypeError(msg);
}
;
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $isInstance_4(instance){
  return $equals('string', typeof(instance));
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $substring(this$static, endIndex){
  return this$static.substr(0, endIndex);
}

stringCastMap = {3:1, 56:1, 28:1, 2:1};
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException.call(this, message);
}

defineClass(75, 26, $intern_0, StringIndexOutOfBoundsException);
function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalPositionIndexes(start_0, end, size_0){
  if (start_0 < 0 || end > size_0) {
    throw toJs(new IndexOutOfBoundsException('fromIndex: ' + start_0 + ', toIndex: ' + end + ', size: ' + size_0));
  }
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

defineClass(649, 1, {});
function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (checkCriticalStringElementIndex(i + 3, str.length) , str.charCodeAt(i + 3) + (checkCriticalStringElementIndex(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (checkCriticalStringElementIndex(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (checkCriticalStringElementIndex(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (result != null) {
    return round_int((checkCriticalNotNull(result) , result));
  }
  result = back_0[key];
  hashCode = result == null?compute(str):round_int((checkCriticalNotNull(result) , result));
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 121);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorNull_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorNull', 71);
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 105);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 38);
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 36);
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 106);
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 6);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 29);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 7);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 26);
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 18);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 20);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 34);
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 75);
defineClass(74, 20, $intern_0);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 74);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  JsException.call(this, e);
  this.e = e;
}

defineClass(25, 74, {25:1, 3:1, 7:1, 6:1}, JavaScriptException);
_.getThrown = function(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 25);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(103, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 103);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e){
  $clinit_Impl();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].$_nullMethod();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 25)?castTo(e, 25).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(85, 103, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 85);
function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_1;
  a1 = value_0 >> 22 & $intern_1;
  a2 = value_0 < 0?1048575:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_2) {
    a2 = round_int(value_0 / $intern_2);
    value_0 -= a2 * $intern_2;
  }
  a1 = 0;
  if (value_0 >= $intern_3) {
    a1 = round_int(value_0 / $intern_3);
    value_0 -= a1 * $intern_3;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && (neg0 = ~result.l + 1 & $intern_1 , neg1 = ~result.m + (neg0 == 0?1:0) & $intern_1 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & 1048575 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_1, $intern_1, 524287);
  MIN_VALUE = create0(0, 0, 524288);
  create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_3;
  }
  if (a2 == 1048575) {
    return big_0.l + big_0.m * $intern_3 - $intern_2;
  }
  return big_0;
}

function fromDouble_0(value_0){
  if (-17592186044416 < value_0 && value_0 < $intern_2) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $clinit_DemoApp();
  $info(log_0, 'Going to initialize demo...');
  init_0(makeLambdaFunction(DemoApp$lambda$0$Type.prototype.exec_0, DemoApp$lambda$0$Type, []));
}

function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('ie10', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(12, 6, $intern_5);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 12);
defineClass(9, 12, $intern_5);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 9);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  var lastArg;
  Error_0.call(this, (lastArg = 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_0('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.') , instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 6)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 6):null , lastArg));
}

defineClass(55, 9, $intern_5, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 55);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $build(this$static){
  var options;
  options = new $wnd.Object;
  this$static.center != null && (options.center = this$static.center);
  this$static.zoom_0 != null && (options.zoom = $doubleValue(this$static.zoom_0));
  this$static.minZoom != null && (options.minZoom = $doubleValue(this$static.minZoom));
  this$static.dragging != null && (options.dragging = $booleanValue(this$static.dragging));
  return options;
}

function $dragging(this$static, dragging){
  this$static.dragging = dragging;
  return this$static;
}

function MapOptions$Builder(center, zoom, minZoom){
  this.center = center;
  this.zoom_0 = zoom;
  this.minZoom = minZoom;
}

defineClass(64, 1, {}, MapOptions$Builder);
var Lcom_gwidgets_api_leaflet_options_MapOptions$Builder_2_classLit = createForClass('com.gwidgets.api.leaflet.options', 'MapOptions/Builder', 64);
function $attribution(this$static){
  this$static.attribution = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap<\/a> contributors';
  return this$static;
}

function $build_0(this$static){
  var options;
  options = new $wnd.Object;
  !!this$static.minZoom && (options.minZoom = this$static.minZoom.value_0);
  !!this$static.maxZoom && (options.maxZoom = this$static.maxZoom.value_0);
  this$static.attribution != null && (options.attribution = this$static.attribution);
  return options;
}

function $maxZoom(this$static, maxZoom){
  this$static.maxZoom = maxZoom;
  return this$static;
}

function $minZoom(this$static, minZoom){
  this$static.minZoom = minZoom;
  return this$static;
}

function TileLayerOptions$Builder(){
}

defineClass(65, 1, {}, TileLayerOptions$Builder);
var Lcom_gwidgets_api_leaflet_options_TileLayerOptions$Builder_2_classLit = createForClass('com.gwidgets.api.leaflet.options', 'TileLayerOptions/Builder', 65);
function ArrayIndexOutOfBoundsException(msg){
  IndexOutOfBoundsException.call(this, msg);
}

defineClass(57, 26, $intern_0, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 57);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(81, 7, $intern_0, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 81);
function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(70, 7, $intern_0, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 70);
defineClass(35, 1, {3:1, 28:1, 35:1});
_.compareTo = function(other){
  return this.ordinal_0 - other.ordinal_0;
}
;
_.equals = function(other){
  return this === other;
}
;
_.equals_0 = function(other){
  return this.equals(other);
}
;
_.hashCode = function(){
  return getHashCode(this);
}
;
_.hashCode_0 = function(){
  return this.hashCode();
}
;
_.name = function(){
  return this.name_0 != null?this.name_0:'' + this.ordinal_0;
}
;
_.ordinal = function(){
  return this.ordinal_0;
}
;
_.toString = function(){
  return this.name_0 != null?this.name_0:'' + this.ordinal_0;
}
;
_.ordinal_0 = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 35);
function IllegalArgumentException(message){
  RuntimeException_0.call(this, message);
}

defineClass(43, 7, $intern_0, IllegalArgumentException);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 43);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(){
  RuntimeException_0.call(this, "Stream already terminated, can't be modified or used");
}

defineClass(49, 7, $intern_0, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 49);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_4, 18, 256, 0, 1);
}

var boxedValues;
defineClass(650, 1, {});
defineClass(654, 1, {});
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(17, 7, $intern_0, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 17);
function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

defineClass(122, 1, {16:1});
_.add = function(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.addAll = function(c){
  var changed, e, e$iterator;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    changed = changed | this.add(e);
  }
  return changed;
}
;
_.clear = function(){
  var iter;
  for (iter = this.iterator(); iter.hasNext_0();) {
    iter.next_0();
    iter.remove_0();
  }
}
;
_.contains = function(o){
  return $advanceToFind(this, o, false);
}
;
_.containsAll = function(c){
  return $containsAll(this, c);
}
;
_.isEmpty = function(){
  return this.size() == 0;
}
;
_.remove = function(o){
  return $advanceToFind(this, o, true);
}
;
_.removeAll = function(c){
  var changed, iter, o;
  checkCriticalNotNull(c);
  changed = false;
  for (iter = this.iterator(); iter.hasNext_0();) {
    o = iter.next_0();
    if (c.contains(o)) {
      iter.remove_0();
      changed = true;
    }
  }
  return changed;
}
;
_.retainAll = function(c){
  var changed, iter, o;
  checkCriticalNotNull(c);
  changed = false;
  for (iter = this.iterator(); iter.hasNext_0();) {
    o = iter.next_0();
    if (!c.contains(o)) {
      iter.remove_0();
      changed = true;
    }
  }
  return changed;
}
;
_.toArray = function(){
  return this.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, this.size(), 5, 1));
}
;
_.toArray_0 = function(a){
  var i, it, size_0;
  size_0 = this.size();
  a.length < size_0 && (a = stampJavaTypeInfo_1(new Array(size_0), a));
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, it.next_0());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 122);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static)).this$01); iter.hasNext;) {
    entry = $next(iter);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        $remove_0(iter);
      }
      return entry;
    }
  }
  return null;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(125, 1, {54:1});
_.getOrDefault = function(key, defaultValue){
  var currentValue;
  return currentValue = instanceOfString(key)?$getStringValue(this, key):getEntryValueOrNull($getEntry(this.hashCodeMap, key)) , currentValue == null && !(instanceOfString(key)?$hasStringValue(this, key):!!$getEntry(this.hashCodeMap, key))?defaultValue:currentValue;
}
;
_.putIfAbsent = function(key, value_0){
  var currentValue;
  return currentValue = instanceOfString(key)?$getStringValue(this, key):getEntryValueOrNull($getEntry(this.hashCodeMap, key)) , currentValue != null?currentValue:instanceOfString(key)?$putStringValue(this, key, value_0):$put_0(this.hashCodeMap, key, value_0);
}
;
_.replace = function(key, value_0){
  return (instanceOfString(key)?$hasStringValue(this, key):!!$getEntry(this.hashCodeMap, key))?instanceOfString(key)?$putStringValue(this, key, value_0):$put_0(this.hashCodeMap, key, value_0):null;
}
;
_.clear = function(){
  $reset((new AbstractHashMap$EntrySet(this)).this$01);
}
;
_.containsKey = function(key){
  return !!$implFindEntry(this, key, false);
}
;
_.containsValue = function(value_0){
  var entry, entry$iterator, v;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next(entry$iterator);
    v = entry.getValue();
    if (maskUndefined(value_0) === maskUndefined(v) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, v)) {
      return true;
    }
  }
  return false;
}
;
_.equals_0 = function(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 31)) {
    return false;
  }
  otherMap = castTo(obj, 54);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.hashCodeMap.size_0 + otherMap.stringMap.size_0) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(otherMap)).this$01); entry$iterator.hasNext;) {
    entry = $next(entry$iterator);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get = function(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode_0 = function(){
  return hashCode_0(new AbstractHashMap$EntrySet(this));
}
;
_.isEmpty = function(){
  return this.hashCodeMap.size_0 + this.stringMap.size_0 == 0;
}
;
_.keySet = function(){
  return new AbstractMap$1(this);
}
;
_.put = function(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.putAll = function(map_0){
  var e, e$iterator;
  checkCriticalNotNull(map_0);
  for (e$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(castTo(map_0, 31))).this$01); e$iterator.hasNext;) {
    e = $next(e$iterator);
    $put(this, e.getKey(), e.getValue());
  }
}
;
_.remove = function(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size = function(){
  return $size((new AbstractHashMap$EntrySet(this)).this$01);
}
;
_.values = function(){
  return new AbstractMap$2(this);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 125);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0){
  return $containsValue_0(value_0, this$static.stringMap) || $containsValue_0(value_0, this$static.hashCodeMap);
}

function $containsValue_0(value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_0(), 10);
    if ($equals_0(value_0, entry.getValue())) {
      return true;
    }
  }
  return false;
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_0(this$static.stringMap, key);
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

function $remove(this$static, key){
  return instanceOfString(key)?key == null?$remove_3(this$static.hashCodeMap, null):$remove_4(this$static.stringMap, key):$remove_3(this$static.hashCodeMap, key);
}

function $reset(this$static){
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  structureChanged(this$static);
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(86, 125, {54:1});
_.clear = function(){
  $reset(this);
}
;
_.containsKey = function(key){
  return $containsKey(this, key);
}
;
_.containsValue = function(value_0){
  return $containsValue(this, value_0);
}
;
_.get = function(key){
  return instanceOfString(key)?$getStringValue(this, key):getEntryValueOrNull($getEntry(this.hashCodeMap, key));
}
;
_.put = function(key, value_0){
  return $put(this, key, value_0);
}
;
_.remove = function(key){
  return $remove(this, key);
}
;
_.size = function(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 86);
defineClass(124, 122, $intern_6);
_.equals_0 = function(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 37)) {
    return false;
  }
  other = castTo(o, 37);
  if (other.size() != this.size()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function(){
  return hashCode_0(this);
}
;
_.removeAll = function(c){
  var iter, o, o$iterator, size_0;
  checkCriticalNotNull(c);
  size_0 = this.size();
  if (size_0 < c.size()) {
    for (iter = this.iterator(); iter.hasNext_0();) {
      o = iter.next_0();
      c.contains(o) && iter.remove_0();
    }
  }
   else {
    for (o$iterator = c.iterator(); o$iterator.hasNext_0();) {
      o = o$iterator.next_0();
      this.remove(o);
    }
  }
  return size_0 != this.size();
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 124);
function $contains(this$static, o){
  if (instanceOf(o, 10)) {
    return $containsEntry(this$static.this$01, castTo(o, 10));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(11, 124, $intern_6, AbstractHashMap$EntrySet);
_.clear = function(){
  $reset(this.this$01);
}
;
_.contains = function(o){
  return $contains(this, o);
}
;
_.iterator = function(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove = function(entry){
  var key;
  if ($contains(this, entry)) {
    key = castTo(entry, 10).getKey();
    $remove(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size = function(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 11);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = castTo(this$static.current.next_0(), 10);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function $remove_0(this$static){
  checkCriticalState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_0();
  this$static.last = null;
  this$static.hasNext = $computeHasNext(this$static);
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

defineClass(13, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_0 = function(){
  return $next(this);
}
;
_.hasNext_0 = function(){
  return this.hasNext;
}
;
_.remove_0 = function(){
  $remove_0(this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 13);
defineClass(123, 122, $intern_7);
_.addAtIndex = function(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add = function(obj){
  this.addAtIndex(this.size(), obj);
  return true;
}
;
_.addAllAtIndex = function(index_0, c){
  var changed, e, e$iterator;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    this.addAtIndex(index_0++, e);
    changed = true;
  }
  return changed;
}
;
_.clear = function(){
  this.removeRange_0(0, this.size());
}
;
_.equals_0 = function(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 22)) {
    return false;
  }
  other = castTo(o, 22);
  if (this.size() != other.size()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function(){
  return hashCode_1(this);
}
;
_.indexOf = function(toFind){
  var i, n;
  for (i = 0 , n = this.size(); i < n; ++i) {
    if (equals(toFind, this.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
}
;
_.iterator = function(){
  return new AbstractList$IteratorImpl(this);
}
;
_.lastIndexOf = function(toFind){
  var i;
  for (i = this.size() - 1; i > -1; --i) {
    if (equals(toFind, this.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
}
;
_.removeAtIndex = function(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
_.removeRange_0 = function(fromIndex, endIndex){
  var i, iter;
  iter = new AbstractList$ListIteratorImpl(this, fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    checkCriticalElement(iter.i < iter.this$01.size());
    iter.this$01.getAtIndex(iter.last = iter.i++);
    $remove_1(iter);
  }
}
;
_.setAtIndex = function(index_0, o){
  throw toJs(new UnsupportedOperationException_0('Set not supported on this list'));
}
;
_.subList = function(fromIndex, toIndex){
  return new AbstractList$SubList(this, fromIndex, toIndex);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 123);
function $remove_1(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01.removeAtIndex(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

defineClass(48, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function(){
  return this.i < this.this$01.size();
}
;
_.next_0 = function(){
  return checkCriticalElement(this.i < this.this$01.size()) , this.this$01.getAtIndex(this.last = this.i++);
}
;
_.remove_0 = function(){
  $remove_1(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 48);
function AbstractList$ListIteratorImpl(this$0, start_0){
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size());
  this.i = start_0;
}

defineClass(72, 48, {}, AbstractList$ListIteratorImpl);
_.remove_0 = function(){
  $remove_1(this);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 72);
function AbstractList$SubList(wrapped, fromIndex, toIndex){
  checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.size());
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
}

defineClass(73, 123, $intern_7, AbstractList$SubList);
_.addAtIndex = function(index_0, element){
  checkCriticalPositionIndex(index_0, this.size_0);
  this.wrapped.addAtIndex(this.fromIndex + index_0, element);
  ++this.size_0;
}
;
_.getAtIndex = function(index_0){
  checkCriticalElementIndex(index_0, this.size_0);
  return this.wrapped.getAtIndex(this.fromIndex + index_0);
}
;
_.removeAtIndex = function(index_0){
  var result;
  checkCriticalElementIndex(index_0, this.size_0);
  result = this.wrapped.removeAtIndex(this.fromIndex + index_0);
  --this.size_0;
  return result;
}
;
_.setAtIndex = function(index_0, element){
  checkCriticalElementIndex(index_0, this.size_0);
  return this.wrapped.setAtIndex(this.fromIndex + index_0, element);
}
;
_.size = function(){
  return this.size_0;
}
;
_.fromIndex = 0;
_.size_0 = 0;
var Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util', 'AbstractList/SubList', 73);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(77, 124, $intern_6, AbstractMap$1);
_.clear = function(){
  $reset(this.this$01);
}
;
_.contains = function(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function(){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}
;
_.remove = function(key){
  if ($containsKey(this.this$01, key)) {
    $remove(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size = function(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 77);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(78, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function(){
  return this.val$outerIter2.hasNext;
}
;
_.next_0 = function(){
  var entry;
  entry = $next(this.val$outerIter2);
  return entry.getKey();
}
;
_.remove_0 = function(){
  $remove_0(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 78);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(79, 122, {16:1}, AbstractMap$2);
_.clear = function(){
  $reset(this.this$01);
}
;
_.contains = function(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.iterator = function(){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01);
  return new AbstractMap$2$1(outerIter);
}
;
_.size = function(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 79);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(80, 1, {}, AbstractMap$2$1);
_.hasNext_0 = function(){
  return this.val$outerIter2.hasNext;
}
;
_.next_0 = function(){
  var entry;
  entry = $next(this.val$outerIter2);
  return entry.getValue();
}
;
_.remove_0 = function(){
  $remove_0(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 80);
defineClass(76, 1, $intern_8);
_.equals_0 = function(other){
  var entry;
  if (!instanceOf(other, 10)) {
    return false;
  }
  entry = castTo(other, 10);
  return equals(this.key, entry.getKey()) && equals(this.value_0, entry.getValue());
}
;
_.getKey = function(){
  return this.key;
}
;
_.getValue = function(){
  return this.value_0;
}
;
_.hashCode_0 = function(){
  return hashCode_2(this.key) ^ hashCode_2(this.value_0);
}
;
_.setValue = function(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 76);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(50, 76, $intern_8, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 50);
defineClass(127, 1, $intern_8);
_.equals_0 = function(other){
  var entry;
  if (!instanceOf(other, 10)) {
    return false;
  }
  entry = castTo(other, 10);
  return equals(this.val$entry2.value[0], entry.getKey()) && equals($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function(){
  return hashCode_2(this.val$entry2.value[0]) ^ hashCode_2($getValue(this));
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 127);
function $add(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $indexOf(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $lastIndexOf_0(this$static, o, index_0){
  for (; index_0 >= 0; --index_0) {
    if (equals(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_2(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function $toArray(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
}

defineClass(21, 123, {3:1, 16:1, 22:1}, ArrayList);
_.addAtIndex = function(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add = function(o){
  return $add(this, o);
}
;
_.addAllAtIndex = function(index_0, c){
  var cArray, len;
  checkCriticalPositionIndex(index_0, this.array.length);
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this.array, index_0, cArray);
  return true;
}
;
_.addAll = function(c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this.array, this.array.length, cArray);
  return true;
}
;
_.clear = function(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
}
;
_.contains = function(o){
  return $indexOf(this, o, 0) != -1;
}
;
_.getAtIndex = function(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.indexOf = function(o){
  return $indexOf(this, o, 0);
}
;
_.isEmpty = function(){
  return this.array.length == 0;
}
;
_.iterator = function(){
  return new ArrayList$1(this);
}
;
_.lastIndexOf = function(o){
  return $lastIndexOf_0(this, o, this.array.length - 1);
}
;
_.removeAtIndex = function(index_0){
  return $remove_2(this, index_0);
}
;
_.remove = function(o){
  var i;
  i = $indexOf(this, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this.array.length);
  removeFrom(this.array, i, 1);
  return true;
}
;
_.removeRange_0 = function(fromIndex, endIndex){
  var count;
  checkCriticalPositionIndexes(fromIndex, endIndex, this.array.length);
  count = endIndex - fromIndex;
  removeFrom(this.array, fromIndex, count);
}
;
_.setAtIndex = function(index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0]);
  this.array[index_0] = o;
  return previous;
}
;
_.size = function(){
  return this.array.length;
}
;
_.toArray = function(){
  return clone(this.array, this.array.length);
}
;
_.toArray_0 = function(out){
  return $toArray(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 21);
function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(93, 1, {}, ArrayList$1);
_.hasNext_0 = function(){
  return this.i < this.this$01.array.length;
}
;
_.next_0 = function(){
  checkCriticalElement(this.i < this.this$01.array.length);
  this.last = this.i++;
  return this.this$01.array[this.last];
}
;
_.remove_0 = function(){
  checkCriticalState(this.last != -1);
  $remove_2(this.this$01, this.i = this.last);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 93);
function spliterator_0(array, endExclusive){
  return checkCriticalArrayBounds(endExclusive, array.length) , new Spliterators$ArraySpliterator(array, endExclusive);
}

function stream(array){
  return new StreamImpl(null, spliterator_0(array, array.length));
}

function hashCode_0(collection){
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_1(list){
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

function recordLastKnownStructure(host, iterator){
  iterator.$modCount = host.$modCount;
}

function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(101, 7, $intern_0, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 101);
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  $reset(this);
}

defineClass(31, 86, {3:1, 31:1, 54:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 31);
function $findEntryInChain(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host_0);
  return null;
}

function $remove_3(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_0(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete(this$static.backingMap, hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host_0);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

defineClass(96, 1, {}, InternalHashCodeMap);
_.iterator = function(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 96);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(53, 1, {}, InternalHashCodeMap$1);
_.next_0 = function(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove_0 = function(){
  $remove_3(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 53);
function $delete(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $delete_0(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_0(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host_0);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_4(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    $delete_0(this$static.backingMap, key);
    --this$static.size_0;
    structureChanged(this$static.host_0);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

defineClass(94, 1, {}, InternalStringMap);
_.iterator = function(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 94);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(51, 1, {}, InternalStringMap$1);
_.next_0 = function(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function(){
  return !this.current.done;
}
;
_.remove_0 = function(){
  $remove_4(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 51);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(95, 127, $intern_8, InternalStringMap$2);
_.getKey = function(){
  return this.val$entry2.value[0];
}
;
_.getValue = function(){
  return $getValue(this);
}
;
_.setValue = function(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 95);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(97, 7, $intern_0, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 97);
function equals(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_2(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $forEachRemaining(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

function checkCriticalArrayBounds(end, length_0){
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

defineClass(58, 1, {});
_.forEachRemaining = function(consumer){
  $forEachRemaining(this, consumer);
}
;
_.characteristics_0 = function(){
  return this.characteristics;
}
;
_.estimateSize = function(){
  return this.sizeEstimate;
}
;
_.characteristics = 0;
_.sizeEstimate = 0;
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 58);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(59, 58, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 59);
function $forEachRemaining_0(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
  }
}

function $tryAdvance(this$static, consumer){
  checkCriticalNotNull(consumer);
  if (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
    return true;
  }
  return false;
}

defineClass(60, 1, {});
_.forEachRemaining = function(consumer){
  $forEachRemaining(this, consumer);
}
;
_.characteristics_0 = function(){
  return this.characteristics;
}
;
_.estimateSize = function(){
  return this.limit - this.index_0;
}
;
_.characteristics = 0;
_.index_0 = 0;
_.limit = 0;
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 60);
function $consume(this$static, consumer, index_0){
  consumer.accept(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(61, 60, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.tryAdvance = function(consumer){
  return $tryAdvance(this, consumer);
}
;
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 61);
defineClass(30, 1, {30:1});
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 30);
function $clinit_Level(){
  $clinit_Level = emptyMethod;
  INFO = new Level$LevelInfo;
}

defineClass(126, 1, {3:1});
var INFO;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', 126);
function Level$LevelInfo(){
}

defineClass(84, 126, {3:1}, Level$LevelInfo);
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 84);
function $addLoggerImpl(this$static, logger){
  (($clinit_Logger() , LOGGING_OFF)?null:logger.name_0).length == 0 && $addHandler(logger, new SimpleConsoleLogHandler);
  $putStringValue(this$static.loggerMap, LOGGING_OFF?null:logger.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = castTo($getStringValue(this$static.loggerMap, name_0), 27);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = ($clinit_Logger() , LOGGING_OFF)?null:newLogger.name_0;
    parentName = $substring(name_1, $wnd.Math.max(0, $lastIndexOf(name_1, String.fromCharCode(46))));
    $setParent(newLogger, $ensureLogger(this$static, parentName));
    (LOGGING_OFF?null:newLogger.name_0).length == 0 && $addHandler(newLogger, new SimpleConsoleLogHandler);
    $putStringValue(this$static.loggerMap, LOGGING_OFF?null:newLogger.name_0, newLogger);
    return newLogger;
  }
  return logger;
}

function LogManager(){
  this.loggerMap = new HashMap;
}

function getLogManager(){
  var rootLogger;
  if (!singleton) {
    singleton = new LogManager;
    rootLogger = new Logger('');
    $setLevel(rootLogger, ($clinit_Level() , INFO));
    $addLoggerImpl(singleton, rootLogger);
  }
  return singleton;
}

defineClass(83, 1, {}, LogManager);
var singleton;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 83);
function LogRecord(msg){
  this.msg = msg;
  fromDouble_0(Date.now());
}

defineClass(98, 1, {3:1}, LogRecord);
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 98);
function $clinit_Logger(){
  $clinit_Logger = emptyMethod;
  LOGGING_OFF = true;
  ALL_ENABLED = false;
  INFO_ENABLED = false;
  WARNING_ENABLED = false;
  SEVERE_ENABLED = false;
}

function $actuallyLog(this$static, record){
  var handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  for (handler$array0 = $getHandlers(this$static) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
    $publish(record);
  }
  logger = !LOGGING_OFF && this$static.useParentHandlers?LOGGING_OFF?null:this$static.parent_0:null;
  while (logger) {
    for (handler$array = $getHandlers(logger) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
      $publish(record);
    }
    logger = !LOGGING_OFF && logger.useParentHandlers?LOGGING_OFF?null:logger.parent_0:null;
  }
}

function $addHandler(this$static, handler){
  if (LOGGING_OFF) {
    return;
  }
  $add(this$static.handlers, handler);
}

function $getEffectiveLevel(this$static){
  var effectiveLevel, logger;
  if (this$static.level) {
    return this$static.level;
  }
  logger = LOGGING_OFF?null:this$static.parent_0;
  while (logger) {
    effectiveLevel = LOGGING_OFF?null:logger.level;
    if (effectiveLevel) {
      return effectiveLevel;
    }
    logger = LOGGING_OFF?null:logger.parent_0;
  }
  return $clinit_Level() , INFO;
}

function $getHandlers(this$static){
  if (LOGGING_OFF) {
    return initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, $intern_9, 30, 0, 0, 1);
  }
  return castTo($toArray(this$static.handlers, initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, $intern_9, 30, this$static.handlers.array.length, 0, 1)), 102);
}

function $info(this$static, msg){
  if (!INFO_ENABLED) {
    return;
  }
  $log(this$static, ($clinit_Level() , msg));
}

function $log(this$static, msg){
  var record;
  (ALL_ENABLED?($getEffectiveLevel(this$static) , true):INFO_ENABLED?($clinit_Level() , true):WARNING_ENABLED?($clinit_Level() , false):SEVERE_ENABLED && ($clinit_Level() , false)) && (record = new LogRecord(msg) , $actuallyLog(this$static, record));
}

function $setLevel(this$static, newLevel){
  if (LOGGING_OFF) {
    return;
  }
  this$static.level = newLevel;
}

function $setParent(this$static, newParent){
  if (LOGGING_OFF) {
    return;
  }
  !!newParent && (this$static.parent_0 = newParent);
}

function Logger(name_0){
  $clinit_Logger();
  if (LOGGING_OFF) {
    return;
  }
  this.name_0 = name_0;
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

function getLogger(name_0){
  $clinit_Logger();
  if (LOGGING_OFF) {
    return new Logger(null);
  }
  return $ensureLogger(getLogManager(), name_0);
}

defineClass(27, 1, {27:1}, Logger);
_.useParentHandlers = false;
var ALL_ENABLED = false, INFO_ENABLED = false, LOGGING_OFF = false, SEVERE_ENABLED = false, WARNING_ENABLED = false;
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 27);
function $publish(record){
  var console_0, level;
  console_0 = $equals(typeof(console_0), 'undefined')?null:new ConsoleLogger;
  if (!console_0) {
    return;
  }
  $clinit_Level();
  level = (null , 'info');
  $log_0(level, record.msg);
}

function SimpleConsoleLogHandler(){
}

defineClass(52, 30, {30:1}, SimpleConsoleLogHandler);
var Ljava_util_logging_SimpleConsoleLogHandler_2_classLit = createForClass('java.util.logging', 'SimpleConsoleLogHandler', 52);
function of_0(supplier, accumulator, combiner, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl;
}

function $clinit_Collector$Characteristics(){
  $clinit_Collector$Characteristics = emptyMethod;
  CONCURRENT = new Collector$Characteristics('CONCURRENT', 0);
  IDENTITY_FINISH = new Collector$Characteristics('IDENTITY_FINISH', 1);
  UNORDERED = new Collector$Characteristics('UNORDERED', 2);
}

function Collector$Characteristics(enum$name, enum$ordinal){
  this.name_0 = enum$name;
  this.ordinal_0 = enum$ordinal;
}

function values_0(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_4, 14, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(14, 35, {3:1, 28:1, 35:1, 14:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 14, values_0);
function CollectorImpl(){
}

defineClass(99, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 99);
function Collectors$20methodref$add$Type(){
}

defineClass(40, 1, {}, Collectors$20methodref$add$Type);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 40);
function Collectors$21methodref$ctor$Type(){
}

defineClass(39, 1, {}, Collectors$21methodref$ctor$Type);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 39);
function Collectors$lambda$21$Type(){
}

defineClass(41, 1, {}, Collectors$lambda$21$Type);
var Ljava_util_stream_Collectors$lambda$21$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$21$Type', 41);
function $terminate(this$static){
  if (!this$static.root_0) {
    $throwIfTerminated(this$static);
    this$static.terminated = true;
  }
   else {
    $terminate(this$static.root_0);
  }
}

function $throwIfTerminated(this$static){
  if (this$static.root_0) {
    $throwIfTerminated(this$static.root_0);
  }
   else if (this$static.terminated) {
    throw toJs(new IllegalStateException_0);
  }
}

function TerminatableStream(previous){
  if (!previous) {
    this.root_0 = null;
    new ArrayList;
  }
   else {
    this.root_0 = previous;
  }
}

defineClass(87, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 87);
function $map(this$static, mapper){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$MapToObjSpliterator(mapper, this$static.spliterator));
}

function $reduce(this$static, identity){
  var consumer;
  $terminate(this$static);
  consumer = new StreamImpl$ValueConsumer;
  consumer.value_0 = identity;
  this$static.spliterator.forEachRemaining(new StreamImpl$lambda$5$Type(consumer));
  return consumer.value_0;
}

function StreamImpl(prev, spliterator){
  TerminatableStream.call(this, prev);
  this.spliterator = spliterator;
}

function lambda$4(a_1, t_2){
  castTo(a_1, 16).add(t_2);
  return a_1;
}

function lambda$5(consumer_0, item_2){
  $accept(consumer_0, lambda$4(consumer_0.value_0, item_2));
}

defineClass(32, 87, {32:1}, StreamImpl);
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 32);
function $lambda$0(action_1, u_1){
  action_1.accept(($clinit_DemoApp() , new DemoApp$Coordinate(castTo(u_1, 4)[0], castTo(u_1, 4)[1])));
}

function StreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.original = original;
}

defineClass(88, 59, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function(action){
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(action));
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 88);
function StreamImpl$MapToObjSpliterator$lambda$0$Type(action_1){
  this.action_1 = action_1;
}

defineClass(90, 1, {}, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept = function(arg0){
  $lambda$0(this.action_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 90);
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(89, 1, {}, StreamImpl$ValueConsumer);
_.accept = function(value_0){
  $accept(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 89);
function StreamImpl$lambda$5$Type(consumer_0){
  this.consumer_0 = consumer_0;
}

defineClass(91, 1, {}, StreamImpl$lambda$5$Type);
_.accept = function(arg0){
  lambda$5(this.consumer_0, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 91);
function clone(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function copy(src_0, srcOfs, dest, destOfs, len){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = dest;
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = src_0.slice(batchStart, batchEnd);
    spliceArgs.splice(0, 0, destOfs, 0);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy(values, 0, array, index_0, values.length);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

defineClass(652, 1, {});
function stampJavaTypeInfo_1(array, referenceType){
  return stampJavaTypeInfo_0(array, referenceType);
}

function $log_0(level, message){
  var logFn;
  logFn = console[level];
  logFn.call(console, message);
}

function ConsoleLogger(){
}

defineClass(100, 1, {}, ConsoleLogger);
var Ljavaemul_internal_ConsoleLogger_2_classLit = createForClass('javaemul.internal', 'ConsoleLogger', 100);
defineClass(656, 1, {});
function $clinit_ScriptInjector(){
  $clinit_ScriptInjector = emptyMethod;
  TOP_WINDOW = $wnd.window.window;
}

function attachListeners(scriptElement, callback){
  $clinit_ScriptInjector();
  scriptElement.onload = makeLambdaFunction(ScriptInjector$lambda$0$Type.prototype.onInvoke, ScriptInjector$lambda$0$Type, [callback, scriptElement]);
  scriptElement.onerror = makeLambdaFunction(ScriptInjector$lambda$1$Type.prototype.onInvoke, ScriptInjector$lambda$1$Type, [callback, scriptElement]);
}

function lambda$0(callback_0, removeTag_1, scriptElement_2){
  $clinit_ScriptInjector();
  !!callback_0 && lambda$0_0(callback_0.paths_0, callback_0.actionWhenReady_1);
  removeTag_1 && scriptElement_2.parentNode.removeChild(scriptElement_2);
  return null;
}

function lambda$1(callback_0, removeTag_1, scriptElement_2){
  $clinit_ScriptInjector();
  !!callback_0 && $wnd.window.console.log('Script loading failure: ' + (new Exception('onerror() called.')).detailMessage);
  removeTag_1 && scriptElement_2.parentNode.removeChild(scriptElement_2);
  return null;
}

var TOP_WINDOW;
function $inject(this$static){
  var doc, scriptElement, wnd;
  wnd = this$static.window_0 == null?window:this$static.window_0;
  doc = wnd['document'];
  scriptElement = castToNative(doc.createElement('script'), $wnd.HTMLScriptElement);
  !!this$static.callback && attachListeners(scriptElement, this$static.callback);
  scriptElement.src = this$static.scriptUrl;
  doc.head.appendChild(scriptElement);
  return checkCriticalType(scriptElement == null || isJsObject(scriptElement)) , scriptElement;
}

function $setCallback(this$static, callback){
  this$static.callback = callback;
  return this$static;
}

function $setWindow(this$static, window_0){
  this$static.window_0 = window_0;
  return this$static;
}

function ScriptInjector$FromUrl(scriptUrl){
  this.scriptUrl = scriptUrl;
}

defineClass(68, 1, {}, ScriptInjector$FromUrl);
var Lorg_gwtproject_core_client_ScriptInjector$FromUrl_2_classLit = createForClass('org.gwtproject.core.client', 'ScriptInjector/FromUrl', 68);
function ScriptInjector$lambda$0$Type(callback_0, scriptElement_2){
  this.callback_0 = callback_0;
  this.removeTag_1 = false;
  this.scriptElement_2 = scriptElement_2;
}

defineClass(157, $wnd.Function, {}, ScriptInjector$lambda$0$Type);
_.onInvoke = function(arg0){
  return lambda$0(this.callback_0, this.removeTag_1, this.scriptElement_2);
}
;
_.removeTag_1 = false;
function ScriptInjector$lambda$1$Type(callback_0, scriptElement_2){
  this.callback_0 = callback_0;
  this.removeTag_1 = false;
  this.scriptElement_2 = scriptElement_2;
}

defineClass(158, $wnd.Function, {}, ScriptInjector$lambda$1$Type);
_.onInvoke = function(arg0){
  return lambda$1(this.callback_0, this.removeTag_1, this.scriptElement_2);
}
;
_.removeTag_1 = false;
function init_0(callbackFn){
  var lastArg, lastArg0;
  injectNextScript(castTo($reduce((lastArg0 = stream(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 6, ['https://d3js.org/d3.v4.min.js', 'https://d3js.org/d3-hexbin.v0.2.min.js', 'https://rawgit.com/Asymmetrik/leaflet-d3/master/dist/leaflet-d3.js'])) , of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$21$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_4, 14, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)])) , lastArg0), (lastArg = new ArrayList , lastArg)), 22), callbackFn);
}

function ensureInjected(url_0, callback){
  $inject($setCallback($setWindow(($clinit_ScriptInjector() , new ScriptInjector$FromUrl(url_0)), TOP_WINDOW), callback));
}

function injectNextScript(paths, actionWhenReady){
  ensureInjected(castToString(paths.removeAtIndex(0)), new LeafletD3LibInjector$lambda$0$Type(paths, actionWhenReady));
}

function lambda$0_0(paths_0, actionWhenReady_1){
  if (!paths_0.isEmpty()) {
    ensureInjected(castToString(paths_0.removeAtIndex(0)), new LeafletD3LibInjector$lambda$0$Type(paths_0, actionWhenReady_1));
    return;
  }
  if (!processed) {
    actionWhenReady_1();
    processed = true;
  }
}

defineClass(174, 1, {});
var processed = false;
function LeafletD3LibInjector$lambda$0$Type(paths_0, actionWhenReady_1){
  this.paths_0 = paths_0;
  this.actionWhenReady_1 = actionWhenReady_1;
}

defineClass(42, 1, {}, LeafletD3LibInjector$lambda$0$Type);
var Lpl_itrack_leafletd3_client_LeafletD3LibInjector$lambda$0$Type_2_classLit = createForClass('pl.itrack.leafletd3.client', 'LeafletD3LibInjector/lambda$0$Type', 42);
function $withDuration(this$static, duration){
  this$static.duration = (checkCriticalNotNull(duration) , duration);
  return this$static;
}

function $withOpacity(this$static, opacity){
  this$static.opacity = (checkCriticalNotNull(opacity) , opacity);
  return this$static;
}

function $withRadius(this$static, radius){
  this$static.radius = (checkCriticalNotNull(radius) , radius);
  return this$static;
}

function HexbinLayer$Config$Builder(){
  $wnd.Object.call(this);
}

defineClass(66, $wnd.Object, {}, HexbinLayer$Config$Builder);
copyObjectProperties(prototypesByTypeId_0[1], _);
var Lpl_itrack_leafletd3_client_wrapper_HexbinLayer$Config$Builder_2_classLit = createForClass('pl.itrack.leafletd3.client.wrapper', 'HexbinLayer/Config/Builder', 66);
function $clinit_DemoApp(){
  $clinit_DemoApp = emptyMethod;
  log_0 = getLogger(($ensureNamesAreInitialized(Lpl_itrack_leafletd3demo_client_DemoApp_2_classLit) , Lpl_itrack_leafletd3demo_client_DemoApp_2_classLit.typeName));
  EXAMPLE_DATA = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 2), $intern_4, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.141859889984868, 52.16308143802469]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.061494245784065, 53.39042728016429]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.03577582835283, 52.533394569791845]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.315795341944682, 52.96303528868884]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.175193321689065, 51.57029829471516]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.05823176915833, 53.06484222908274]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.325858764291578, 53.81685838836188]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.386691600278084, 52.644959163606366]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.590937815970022, 52.004293869096806]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.966678785406774, 50.17884848132632]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.277068116303827, 51.13821565817973]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.410603115495505, 53.16076971368543]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.497951997976124, 50.40323125754625]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.402501290355072, 53.7491090633795]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.352746263608637, 53.11873529370043]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.587786456095497, 51.83294392462122]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.066809352249717, 50.29595857388352]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.344101698177727, 51.300431448294304]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.386514059705924, 51.987188188627265]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.203200803247807, 51.148565127499126]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.636713375479204, 52.718788315233304]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.76247292999215, 50.869625642772235]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.662775613695718, 52.4742027370304]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.716960371994755, 51.97949087374901]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.595450124287023, 51.39212625659811]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.415769725466536, 51.79939715077727]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.31049864987673, 53.58232792382992]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.048138116399656, 51.832837398140654]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.67656915829719, 52.40017574628647]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.68058767545396, 52.03667215951356]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.295700183414265, 50.30258590814865]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.164515944262593, 53.521350042982846]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.118388808777826, 51.67145315181778]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.142636136465363, 53.02739292700452]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.337550458346882, 51.861502417621615]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.403315300621898, 53.21611167100809]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.505615901561132, 52.12113394571489]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.535801292991344, 52.17959092263193]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.462055218023863, 51.30248512960764]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.79968222538458, 53.414253741512695]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.073078699503494, 51.39497801461963]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.354146239953884, 51.85812324432867]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.058379416326073, 51.43504999011515]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.78767699594136, 53.72259863722118]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.152882089741734, 53.11995308206786]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.5810750407799, 52.50973185494264]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.240160715952033, 52.18768951249906]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.721055642879076, 52.28054247141665]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.87008819999163, 52.22992100070653]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.087122176911695, 52.50421531256882]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.007619086730852, 51.7566935347882]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [17.93408162443936, 53.71935076030126]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.392782892636415, 53.545495201056596]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.02982331247283, 51.52884289863027]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.59500759802661, 52.2242266836331]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.12406200079773, 52.40953529539922]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.867972546989765, 52.6443482338901]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.056906397120724, 51.40816821199083]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.69198902718157, 51.313839645786736]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.311021117743007, 52.96850244040855]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.4693328448955, 52.99583192220889]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.197262154572552, 52.145277126555676]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.642261932365315, 52.404594737791975]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.693057757459876, 52.16621073841047]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.838015373831023, 51.75172530030155]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.43819478340609, 54.15411382171769]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.584378066102378, 51.508321799067154]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.47294093725172, 51.41566885732005]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.553590970975932, 53.7172407864692]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.109323519696716, 52.12546020783613]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.404424587772077, 52.51736351263659]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.661563547936357, 52.644778299973275]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.0849517310538, 51.05972791086317]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.792237190329597, 53.2163456353213]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.43326064650707, 49.45510329049856]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.774291769241866, 51.309706797020866]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.79241811513404, 51.6172119492998]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.24087287730292, 51.90460888320703]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.30182814069708, 52.0767347619327]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.856813739839048, 53.823480414122336]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.391170871722267, 51.43219016217388]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.871817086853316, 52.238289860055744]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.199107559953458, 51.729955223988746]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.737587059894924, 52.35148854692543]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.723315116273618, 51.94182205459191]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.799368433243572, 51.43227485987895]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.72569518771952, 51.05187449554135]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.931192663210535, 53.122740471882054]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.533081082973105, 51.73080523841355]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.285050474249026, 50.629842136327255]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.616818140807442, 51.603781610456615]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.29367199955978, 53.06221717361634]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.725714226318907, 53.05146593726197]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.676592923903435, 51.4031923452895]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.02034474156467, 52.78632259030145]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.948902562637898, 53.30616466912645]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.959228473744908, 52.92627490926493]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.527646971964817, 52.00758285735769]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.48507155981334, 53.05231887020779]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.960721364571423, 51.70018909509548]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.37970668869165, 52.60200954791193]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.05667287554411, 52.59005270733028]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.847107437802233, 52.73676693994679]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.303805289717705, 52.95172757761874]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.526189416187098, 51.49235974607102]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.368558517448278, 53.10779495720803]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.457502934684214, 50.965758155637246]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.64381580386455, 52.81467117228356]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.76726173049742, 53.04834429073874]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.77071811879391, 50.67482368599846]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.83681678695213, 52.32087699065936]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.070206057701117, 52.81375916661261]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.95363603464904, 51.50800012907193]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.4329170084866, 52.01769044242086]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.55511772023189, 53.78856128471586]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.753079943068805, 52.22318087671179]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.837283130919804, 53.72104063943012]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.13316011361545, 52.12823253708315]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.53904432979601, 51.25055926634873]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.12443359032057, 51.717320506383615]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.600264487991428, 51.11737436291081]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.319744590536015, 50.39738786963267]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.03578503755384, 53.1038733229419]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.269898230747316, 52.67227379631305]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.287030340679546, 50.42296981897867]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.367877690316632, 51.261329091576854]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.852778168774954, 51.894849084819825]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.440059944158733, 50.56385609944055]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.794655237124992, 51.45572907309868]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.548263314531596, 53.709262622158306]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.081471387706966, 52.95655692142034]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.068615004037852, 50.30903372806111]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.981701814164495, 52.92044630783844]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.475311446201708, 53.27382573438549]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.58326729684347, 51.92352220986221]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.083053585149756, 53.58851324958361]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.62240740297743, 53.06002263225914]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.824810729661547, 50.900370730027994]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.763003959096693, 51.21377049203501]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.21030538426325, 52.09201440287673]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.347255351729196, 53.15627885717417]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.320903766518867, 52.43827973445113]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.222104541450967, 51.01647882662266]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.89899484053024, 53.08995622501352]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.88807619999345, 50.511462839434564]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.81347051576794, 52.370210536697236]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.820376002881186, 52.05261999556432]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.967567568720284, 50.3887405999045]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.92541237915267, 52.8578569288029]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.917955740816343, 52.45919818437567]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.98642558431258, 53.150216133590355]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.850205116992566, 51.84006715621401]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.848290254721952, 53.652620717100454]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.952998153875374, 50.69766235094701]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.706432195254518, 51.2838515270552]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.177681483815103, 51.791972376214176]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.090945666030844, 52.04029546505356]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.58769921147259, 52.2446487448627]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.6497140903972, 50.92828396151557]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.814660070963182, 51.56939018186497]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.418491270516405, 51.083233571570915]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.371207102247062, 53.585574374728665]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.644435143445698, 52.617009628553966]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.884388391354268, 52.65679664950003]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.006618441465736, 51.30454528484981]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.065618605991848, 51.83681504183785]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.033785985849832, 52.39038558263812]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.967331700724667, 53.571550117589844]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.58812930718604, 53.05111921970753]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.384942406011106, 51.40689761247329]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.54882470978788, 50.11811757991879]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.41607033109679, 51.221273649060024]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.125130502597802, 52.79122656572667]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.429808856824692, 52.0048997705471]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.30807623479027, 50.24502819336696]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.97397128925858, 51.60447558021879]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.88518099460641, 52.01352642028697]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.836581020599084, 53.55992837345614]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.02897840522426, 54.73902062583686]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.264878805928177, 52.37238708219113]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.88075197677398, 51.73049400018646]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.4965410411858, 50.84437212590106]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.48508687698091, 51.841872127299396]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.226036652546558, 51.80622497570584]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.944853443877754, 51.47898291344079]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.878832015448104, 51.990734184038274]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.412417491870418, 52.22495555939935]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.6417104500377, 52.865913441324]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.39102980330638, 51.98154637721255]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.119593883041112, 52.3042878386103]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.9385775162504, 52.61031715265715]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.66341938970781, 52.15458086302167]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.798601299502163, 52.12625390261142]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.388132784681897, 53.09183728731837]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.885248806559563, 52.522554388197705]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.57175413281031, 51.3995532210272]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.344871360183685, 50.54256426943264]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.416977243522716, 52.431156631611515]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.461271858970953, 53.23113862203766]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.507125805919756, 52.54462048739449]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.80500549137646, 50.617666808285435]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.660509878298495, 53.89773022016287]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.325768717971716, 51.866767537518776]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.033262527942625, 53.203131907511505]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.319096634618134, 53.393972183794105]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.704996518611853, 50.37890300088785]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.37104344340423, 53.36892077774811]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.60904207447613, 52.78313681067957]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.57149400042017, 51.12528810522108]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.62937604454714, 52.288387637107235]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.3854558793003, 52.587576244901]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.151363873782273, 52.875792227812916]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.39477668123177, 51.29640463716763]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.744720674599463, 52.70236534383238]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.720590482493805, 54.06006231984681]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.633385486301425, 53.54976143879073]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.342867581428795, 52.70218874626076]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.841550485337546, 50.90344709812534]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.388718460892136, 51.89184730540601]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.951623530777955, 54.22201103381687]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.10863535399824, 51.28092334169669]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.035398675020108, 51.99721197582774]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.935580423477965, 51.36543832005271]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.801541736637695, 52.34130758860892]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.532847621822924, 51.669850093424365]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.958745220881745, 52.52324350066932]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.8486900970781, 52.179838231266345]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.122943798099893, 52.81189900072764]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.731063303833075, 51.98734296621841]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.081209067517335, 52.44803318547649]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.785475919200515, 52.49967897499019]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.85325924062432, 52.2863486896727]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.9760980410449, 52.00022374549723]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.975265969025223, 53.47640930229858]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.7080633082083, 52.559111976449074]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.343397396377295, 51.46947489035328]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.381318192629426, 51.91699043305099]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.6124195926083, 52.5384898820617]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.724975468034437, 52.46595859930243]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.82001705109799, 51.568773703054454]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.507691152974274, 51.89962503944722]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.441441410494615, 52.00609311722867]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.88347220344555, 53.29599534616903]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.909594394408607, 51.65166355161018]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.214839753630105, 53.9155785517415]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.395059341757126, 53.34170354142269]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.86101653471774, 52.25815695576505]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.425980024771242, 54.31070078235195]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.523974694622773, 51.4402534519051]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.882179421944727, 52.403557565669644]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.58581631193776, 52.994046194653784]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.133973200062663, 52.762245741612595]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.731567383896582, 50.72588445039034]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.179793553320245, 51.73619884699881]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [24.379751230929983, 52.59332014656982]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.2154683843301, 53.0963232605119]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.535806846299895, 52.727059292983824]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.627388765264314, 51.771778297304266]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.455918702229198, 51.24175131539655]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.56235737093628, 51.30802671734661]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.345758564590284, 52.46727748149926]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.566620976689244, 51.364111026641126]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.098286638222504, 52.9691427501428]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.805613365810878, 53.09458073146089]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.985123635680054, 53.92922451867928]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.935365390077113, 53.11375673593288]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.348685997650406, 51.70857685611227]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.172598002829826, 50.38835029222616]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.68898878701173, 53.48848234778054]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.335981853619064, 52.81423507948116]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.249596474768357, 52.040650259137365]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.462096606067547, 52.445964285283736]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.040828750654768, 52.41124311581575]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.545145440038358, 50.3459274702171]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.587485187529243, 50.83259736170174]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.442934282551786, 52.33283101196104]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.845845908455047, 51.71996647672414]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.488639631243053, 54.42312349454205]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.152642417748954, 52.9736561669568]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.857876155297657, 51.938756777608624]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.79794644028418, 54.046582861050005]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.62378096094045, 52.773701654521375]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.677536438187868, 51.01747535290204]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.56116190506046, 51.94516879842946]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.570780077331378, 51.53835466749167]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.294780125616075, 53.59804762052611]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.884592145795935, 52.18519801234685]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.91952954865139, 54.07941678264966]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.434989469479092, 51.9572856562181]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.028343503506953, 52.03868648400893]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.749143948069584, 52.36204830256616]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.268843784164364, 52.96680534183335]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.028945039852417, 52.00146724632172]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.62267971315964, 52.37564305723187]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.426982003013237, 52.551384072842644]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.88218249835863, 52.82654889470096]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.162816893596435, 51.14628054725395]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.106812707398873, 50.451371758634885]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.414288052046444, 51.4344925160973]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.277910099674507, 54.04433727300632]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.806934875529933, 53.13881976151669]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.376947944210286, 51.81142642952358]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.861981544962905, 52.670388416965814]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.723222220294137, 52.48472667129154]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.82837111516286, 53.08032395216355]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.024788117444537, 53.94466281133801]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.31586667865364, 51.930851790897584]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.96425913429204, 51.33580772398504]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.266974166712227, 52.16997166608996]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.438989394065395, 51.8114808419736]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.92874438249811, 51.61610050494004]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.740052187514163, 51.0838331725793]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.400452048993635, 51.43972461906266]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.520717568964272, 53.03002136369959]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.060828110337585, 52.405193049647906]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.667562911438964, 52.57845929290729]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.137451978941517, 53.024134250755104]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.483391674025896, 52.56267826611768]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.722718507791903, 52.18649311881544]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.78347122611942, 52.10457772572456]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.282453988029772, 53.50355188478419]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.00694128201255, 50.31855123646174]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.205615866850557, 49.93896517856848]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.810961071752846, 53.26726326980094]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.883825834930576, 52.74028736702855]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.630869142987603, 53.67871717158523]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.00269110732287, 51.13296426906075]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.43219098466609, 54.189013749339644]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.532672608002564, 52.10007597359835]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.153682957685994, 51.21641630246541]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.22978758521771, 53.728681271245584]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.715303019352802, 52.07461241668436]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.016867476073916, 51.97156235091413]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.277683864084043, 52.63738204294745]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.97747364643597, 52.92489628930517]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.59249293805905, 53.01587271478174]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.7226466701207, 51.16693178668815]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.8258032704517, 50.90711409002434]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.324277864642813, 52.929062190235236]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.916321707143982, 52.70582292516546]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.642333079754025, 51.34852486374882]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.796469576631168, 51.75597945373073]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.119245410403312, 53.28055725201277]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.393963383201164, 53.23092867833798]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.728262823587738, 51.41043424952445]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.498695982059818, 52.60001277120438]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.83683775080981, 51.22552705906372]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.70694195448052, 52.116710494424545]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.624103790595637, 52.9756071815452]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.064306328952814, 52.77246660727553]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.407818060696126, 53.26567873339487]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.979394309853653, 52.158933801997335]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.755887782420125, 52.2678188126076]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.1285165828335, 53.41358470271746]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.686885520090907, 53.01926349388742]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.80100126105133, 53.74280673697264]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.580436293802748, 50.8552636518289]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.106249705638117, 52.37381848534981]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.417888857231723, 51.791273545491755]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.768828981317043, 53.85263281655683]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.06551969724265, 52.221822785545136]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.599582493645364, 52.07348660075523]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.576866121259485, 52.498786512887]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.108778726428987, 53.2629869807229]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.11016206905714, 52.33144568512114]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.620877044274142, 51.19211950225337]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.845516085472195, 51.804972791231215]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.521348015965454, 53.28132999019165]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.641013368754955, 53.77159614140184]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.814562611294594, 51.5367776083431]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.381407255344605, 53.25670058062665]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.580984890813482, 51.294555092197164]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.547663816852285, 51.21581883056586]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.073968022170217, 50.811512603406456]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.680648095192936, 51.47656366224643]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.93679255182166, 50.891935996701044]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.789294423538262, 53.36041653136042]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.7359898745845, 52.477117367554825]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.31451066779306, 52.18806252399334]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.144250393014005, 52.08970916636099]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.73637203715546, 51.622520531343355]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.28706285809897, 50.62908229224265]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.95498714188345, 50.41873899627113]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.016172868461307, 51.87837697919165]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.532078503983595, 53.39468803806119]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.074506019368414, 53.69071359311151]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.8132341053094, 51.9379638658373]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.853122274436537, 51.91613689547279]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.18763069648946, 50.283458479070376]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.501659665418934, 53.08452499828665]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.736195979046478, 52.139512128974125]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.688807179553347, 52.171207998621234]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.43445209073824, 51.86289210423149]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.415022083420084, 51.79381368144682]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.790882502583543, 54.6901836230897]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.38691303561918, 51.815002846753394]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.270884089481832, 51.93510332943101]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.92025398065316, 50.143475901322766]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.22717039042714, 53.870702887023775]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.743629910374214, 53.251100876526195]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.946306368490962, 52.18955659280699]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.783188327008624, 52.10086782350348]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.23394520318503, 52.173771438557615]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.66853855605927, 53.873933697092774]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.396719748844806, 53.655771240279684]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.23946298258878, 54.84423130921843]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.21491612277367, 51.79777329084864]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.865473373560867, 51.877907364953735]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.245851921057934, 52.619035731113904]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.61803260245053, 52.5252005291836]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.05527961490231, 53.357156872013505]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.78467217196972, 52.56802815993938]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.03690064723243, 52.248429739297976]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.330034161559784, 52.36243751424772]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.14638003119428, 52.429494562366564]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.967307645787365, 53.20580099518827]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.65364095998201, 51.884062745836054]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.08231127215747, 50.526478111898655]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.020592165959684, 50.436605568403344]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.95017470282878, 49.65239835302339]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.7327105303656, 53.551884506832714]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.354187558756674, 52.20589733287821]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.445319836646373, 53.6413667510455]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.739902369023955, 52.12301030219471]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.932081335933503, 52.75924856653073]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.136951344333117, 52.666615060539186]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.636841477975036, 53.86284277570865]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.776923306202107, 51.149653792395625]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.59006946443939, 52.81461845752546]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.052481468135696, 51.60605043400325]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.60582567095431, 52.101968006583625]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.839591341105457, 53.32067246343468]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.088085378756993, 53.36364165988912]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.02037199331395, 52.48731923861681]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.129628095590032, 51.895228548882606]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.51759488057169, 51.7564922259803]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.141934959831307, 51.828043962693066]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.1460917615114, 51.63569220585933]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.713284399748535, 50.53572671780729]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.9417728683717, 53.29730142760982]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.793793805253006, 52.41118996484389]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.0916203901563, 52.253681704260245]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.62123808551362, 53.02955417364217]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.83390532192448, 51.763434015977815]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.486106826365297, 53.53743421197624]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.41200789029588, 52.01244144166175]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.279587172879292, 51.86146292929641]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.824407957042155, 53.92314635734887]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.559972405564892, 55.648811771990374]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.080962724017496, 52.30338845343563]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.38140288629237, 50.44761975686538]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.893104264522908, 52.113914660200564]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.631422757529126, 52.054993063380465]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.691891456599027, 52.838991851427046]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.225719945588867, 52.79214136577134]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.68792598988617, 50.605467014238414]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.529700203929572, 53.22490361331266]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.190785599809484, 51.574141444143706]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.274538270400814, 52.841153944292095]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.961146287246937, 53.27910920243964]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.63632865239726, 52.245744309144804]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.3599923099004, 52.46610300862491]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.81241671409612, 51.55103502330813]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.51764294308682, 53.12088977418251]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.86848699822209, 52.95083244757546]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.512311817287042, 54.03213317794736]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.089354304760345, 53.796976900763624]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.773797292229272, 49.97843722327811]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.51334633023574, 52.80001554890819]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.476209453748485, 52.276407537879656]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.023579516205757, 52.899548065610496]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.043749186697635, 53.032889613645]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.404555572171375, 53.42437622523692]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.62304912446739, 53.31949741249767]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.875443546522927, 50.8304987609578]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.21451740219564, 51.451702322615375]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.521149811843557, 50.373251059412645]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.72230482081933, 52.677639417655996]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.62261826617553, 51.53072800207469]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.099993251760456, 52.75801706638964]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.86116526520827, 52.01856224099725]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.722975433441963, 53.632482201929626]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.862059550870185, 51.02034692860625]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.135429803074725, 52.178744140731155]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.317394759545042, 51.978458958010584]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.958482407404336, 52.1543825464179]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.184978120478007, 51.445734832886664]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.139104643794933, 52.38372443302476]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.314920985667186, 53.70705000069753]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.33425524889319, 51.51269442023516]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.68199026445724, 51.237524038530374]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.621385254315218, 50.99481301546524]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.502899143048577, 51.13982429302872]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.915918365868023, 53.59086932396873]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.8131879381252, 51.06127677568199]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.397345524095396, 51.88326925943773]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.5608858224813, 52.93898415533151]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.402342663706214, 50.7703865764645]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.27522700139057, 53.39014101412205]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.196195664173175, 51.262939274720075]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.110910627156674, 52.238197304889255]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.081261384213892, 52.72211821112687]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.757531861655995, 50.653201275309264]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.933303038708026, 52.23299191390653]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.033469198300963, 51.90978630351996]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.789534591314347, 51.843295315049474]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.29396733764606, 52.79509825389294]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.98291469286166, 53.975913685505446]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.085782774519096, 51.74224783877634]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.954207625346992, 52.23243393224756]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.607915616704222, 53.3183770860751]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.967013848986475, 52.506790824220474]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.639731998173996, 52.70844102097807]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.218020885974052, 52.225826627760405]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.95906318713171, 51.17155351511934]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.142620558753027, 52.7051936154603]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.473861324258205, 52.639463280805515]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.572799489155443, 52.93681206348943]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.16650660922461, 52.44925477006038]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.95030807418487, 50.650890547764355]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.168422981322493, 51.592962576887764]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.119214382141198, 51.90090840641725]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.419126182471366, 53.16909113425161]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.92387918464839, 49.258282807781065]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.031929816124357, 53.31618873975037]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [24.629586457546292, 52.32116809211481]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.16722454857035, 52.55228008104456]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.99842737291366, 51.15438133059897]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.086132801559632, 52.45270558053505]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.492822604230984, 51.01478187684154]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.711526679446973, 50.98382513057278]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.512231478669353, 52.90786759571919]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.59983564655556, 51.818191694983426]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.793096044245654, 51.27395837481388]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.055864971991458, 52.73788759710226]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.31688876681099, 54.10070649434941]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.175374300814912, 53.24060426828449]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.60889834470834, 51.40955897329189]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.875059801134324, 52.95386508576085]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.423975222013997, 50.10951929957994]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.522408883865033, 52.17087274290394]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.209152117077966, 50.84797363595848]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.675488456587615, 51.30149097675684]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.37490445158303, 51.7066779424473]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.366265483227227, 53.752144210182415]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.202832418449265, 50.47645038093761]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.572583483093897, 53.37530865072868]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.29966066587263, 51.488601428805424]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.539201301770017, 51.0741002285341]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.00470652607183, 52.47726612946636]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.448433599894358, 51.87789009251152]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.465658512462237, 52.01263460923382]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.094597034396166, 52.61936519201689]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.90937088049621, 51.549980672846175]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.946339257333378, 52.184106110007036]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.173582024723064, 51.06626973464383]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.71525105058269, 52.50854373548727]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.338551629839873, 51.5731806047593]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.83089679440207, 53.5292818507059]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.1837735067601, 50.80172732561802]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.104296592518132, 52.4470488297641]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.04952885201231, 51.83258421800472]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.072635691199853, 53.20941126130651]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.966608454067746, 51.1744371423233]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.00461821296611, 51.48821244430573]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.594988604704344, 52.372843022593685]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.53242593161276, 53.53132252514133]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.539385488493856, 51.73626805991675]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.598334557490723, 51.23376301946744]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.174471218128208, 52.46272185507983]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.36953424613627, 51.55689937433104]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.527625073096612, 52.07809759953887]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.003400155736323, 50.04009717474402]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.419558534768285, 52.580497056659304]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.99956711892848, 52.48859157741903]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.92752933268112, 53.097874933580954]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.354772203688835, 52.19715472838252]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.96015593490295, 52.74162041745615]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.137892415320874, 53.04306629248426]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.430308269678626, 52.72218530542029]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.86577608124361, 52.36721966816469]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.863738234118838, 52.46009117873695]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.13938228459403, 53.1477700557756]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.63652060062017, 52.68650794588724]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.527559203286017, 51.49285133759504]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.42740355966695, 51.9631600908209]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.523919091407187, 52.57453891190023]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.517421542396704, 51.30183035141055]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.89886354563715, 52.284738503736016]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.970326812466954, 52.93689402962314]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.78358001218758, 51.898050928289535]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.498323610914067, 53.165947098020204]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.36313332896634, 53.10431177860202]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.603820329334017, 52.830938253112684]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.27147632608982, 52.175039957949146]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.44182140464104, 52.64201990532545]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.81107569869404, 51.55690977951604]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.749350956731885, 53.06551282840805]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.297148319983425, 51.6465805762889]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.224348839457722, 53.0895836836484]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.97498109746157, 51.28681278196793]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.878760670877647, 53.08580453051244]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.15034833849594, 53.294644995265294]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.39541168354553, 51.723197269105675]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.547253074670348, 51.94995078551778]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.73209313171619, 51.99420307640543]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.730541244017903, 55.081743816653656]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.250748334508152, 51.72861424126417]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.580862357326904, 53.149159408881324]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.874465768563855, 52.52599388112638]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.86010434510391, 52.76055539211825]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.44773343637635, 52.89342972945158]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.577094045541063, 51.39032127227044]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.283189746067368, 51.26860696305889]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.574462241257837, 52.989370661385706]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.279454749532498, 51.604731034401304]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.16313654713976, 51.27778328757043]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.30228810951036, 51.97064097523347]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.05046549770159, 51.82541386075188]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.194106165125632, 50.73184408467776]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.02885055169692, 50.69220950255406]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.657773773983646, 50.950577378354]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.99584284186728, 53.044104686281294]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.525402487605948, 52.98909353399567]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.410229595047504, 51.85811543021843]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.1453827401436, 51.09120954561597]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.86249314946941, 52.06801568064095]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.144755255269263, 52.93454425051526]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.98548965063334, 52.38915420984557]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.740218484589395, 51.002397179317306]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.372424349619862, 53.433055827777565]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.652517265356085, 51.29876940037946]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.735454858796604, 52.6706820493332]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.873777292453855, 50.76189492051434]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.577453081285697, 51.475839853782]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.451892263377438, 53.13949610503277]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.56397699594782, 52.61626517252292]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.73863198051183, 51.81440578079663]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.15540629311414, 50.39815533286338]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.566747321842403, 51.98543778862953]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.92603247219287, 52.59556237412259]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.92254328904985, 52.060629677828445]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.08146271808238, 50.88194897305977]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.24900850563583, 54.99171766588285]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.328086837851682, 53.57356271812811]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.88395455213697, 51.719523349046064]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.6119206932131, 54.08299219503166]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.98230643728074, 51.76248734177861]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.958837739465412, 51.425323163079845]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.488422821479755, 52.300811738771564]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.92860259471668, 53.25038651475531]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.93600827099305, 51.47465917406999]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.796570091242806, 52.88196983166353]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.82026807644492, 51.1071358345783]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.011076531630582, 52.237105901466634]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.780715023364984, 52.05646330391955]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.621692050659505, 51.362279554950625]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.955401016052644, 53.310914898836934]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.392376558758976, 54.06173698978987]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.888520779194373, 50.768451400695206]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.166298031328342, 51.957207442082556]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.52801902997761, 49.47824563897331]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.465771858642487, 50.43626309949403]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.15538403145589, 52.277291067657124]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.760490031623917, 53.26047029524859]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.191404850157628, 52.6074185678956]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.082916000805028, 51.189762893184174]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.69824675601608, 50.54742984752433]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.908694979508162, 52.173879957248054]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.16641808526605, 51.185642447637896]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.859372231181915, 52.162045494906465]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.817646417910378, 49.705975469344445]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.126438483894162, 51.53683429855504]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.094096987134613, 52.85087563811574]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.26054491810722, 52.08164012884037]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.99635789447522, 52.60290742737855]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.974195441429497, 51.43400269240721]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.590658302535413, 52.13118986125371]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.151558434159043, 53.88861075928876]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.979126460252328, 52.17941687401791]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.042020517203383, 51.667037942056616]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.273260669537578, 50.76656860782846]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.642359710098482, 52.453696996709105]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.142699404751728, 52.15157925709545]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.094216114642204, 53.48475948665576]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.86660998432754, 52.25499646759118]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.893675639862696, 51.00745138506701]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.35420925562982, 52.697258095695894]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.226105307512697, 50.65695422820205]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.7258538195185, 52.27176892601605]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.369146533721594, 52.49370727503247]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.44971913820043, 53.103099849590706]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.66868735454418, 50.47487746294676]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.09561555032625, 52.93600399580575]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.39120157530125, 52.50661158548765]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.905042749069352, 53.44262835561637]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.62814106560437, 51.79435361208422]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.902934219559572, 50.99889966532906]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.45287053625457, 52.7845429807044]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.76935024179904, 52.019981319061785]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.860681184593904, 53.1811046930604]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.966782851318587, 53.03549561494521]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.79831531498502, 53.24946672888196]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.509612286376306, 52.19925616072861]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.03180750640834, 52.01689611422992]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.747196415751148, 52.369808680878656]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.824291153788522, 51.70983964015575]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.42819517866918, 53.550982707281335]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.827423670705926, 54.20848549226807]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.128834584864105, 52.26866995585237]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.01685646550677, 51.897888866817475]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.513073947967044, 50.37513302633667]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.996791360340964, 54.086785763581226]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.599036249480065, 54.548377215658626]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.454980232583466, 52.78521435362253]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.643367781059368, 52.64467481913711]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.88255283641094, 53.87702104229394]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.085291136303685, 50.80680972297565]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.317595264750807, 51.18554478647344]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.545680323781504, 53.48754978141073]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.302568781959756, 53.51358196965659]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.170288190707552, 53.765882308954666]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.710576563309775, 51.12747900675723]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.317632358882552, 51.83354181733428]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.349352463988634, 52.29015579314286]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.967328124271226, 51.02395774378821]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.91838320717595, 51.91101394075475]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.783581939787318, 52.60166084902706]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.161033828830067, 52.49284458399319]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.12372089554499, 51.80852150760948]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.7545216859701, 51.8297295624415]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.533097783823422, 52.45378784416679]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.19116726660434, 52.357860109053945]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.09421688193717, 51.72962412388399]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.05889551876924, 53.391218217213634]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.713492886035084, 53.26963432745008]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.676488487227758, 51.80677767065046]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.24888134876546, 51.30027091528397]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.358406826027007, 51.843190648306475]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.686618345621564, 50.86921273961535]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.45369805437034, 52.18167432359481]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.73386918432956, 50.2852112535826]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.286116480936712, 51.86968144704586]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.33496622519947, 52.388794958901315]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.998961206131387, 50.80027242776057]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.217958565025423, 52.73340285688621]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.07910363738597, 51.71927505317561]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.988945077400064, 50.91735277300666]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.028806695864265, 53.00330820976047]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.149414978123968, 52.18159348304649]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.77393819777701, 52.28324640895018]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.799098180961703, 52.29934036682244]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.899151421730128, 50.87004885847669]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.584786790298995, 50.968015153172864]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.649096522320068, 51.852934543933266]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.680827988517276, 49.93921537407695]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.576604953271733, 50.555868011975555]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.95494300897659, 52.89871821709875]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.790269533632138, 50.835487450352716]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.636979965344448, 52.97899764642518]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.47721233875422, 52.69190432384498]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.87783574850027, 51.88652335098341]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.52097312876325, 52.84651227285959]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.32202141277642, 51.690283207499945]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.58439092710338, 51.475340549046514]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.177680222096857, 52.95169407233585]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.812266033496137, 55.002319450990235]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.17245129939911, 52.95409002818768]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.431002851361033, 51.27450642244309]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.828162813833085, 52.637112629046946]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.436238023303183, 52.29213380433553]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.4207295985666, 51.785138871212716]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.194595800877366, 54.59842962337488]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.828744238718418, 51.816415581200914]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.39903459589769, 54.465574359293036]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.597718840247587, 52.18184352372608]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [24.04068581208657, 51.951131952471194]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.448204407325317, 51.68702799801761]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.263526925106973, 54.80056865704964]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.702461532008254, 52.615154187513035]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.20361772757931, 52.97991853337123]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.809434057935956, 51.09031379157563]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.24900994319723, 53.35203522125331]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.999536585936696, 52.146835657998494]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.544613212255673, 51.43354302933719]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.645863040638105, 53.54033703257285]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.660277501340264, 53.112890049643724]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.07874695140965, 51.845051678627485]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.310574195502852, 50.75644499073189]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.776958353525043, 51.847324551611706]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [24.224131724766252, 52.996492494357256]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.78373034788288, 52.7605481261391]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.49762821534693, 52.728695595208066]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.793886631986922, 52.56083785045148]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.436050009464644, 52.6868055822371]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.003495341089625, 50.87600807323521]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.978086271912645, 53.044731155829375]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.478009566234416, 51.60787145090619]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.609256492087052, 54.05041962222231]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.230565927714892, 53.18092510681691]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.545161832944064, 52.27175959888898]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.789804192476158, 53.34358186674409]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.997288805087795, 51.35085695860257]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.488680304711927, 52.69462777814394]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.150330061067738, 53.90626577472741]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.75212854224494, 50.52389962300844]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.435224341084837, 52.28230730335691]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.03865262529372, 51.85100981331171]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.43422120977632, 54.35687565986935]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.25778090222013, 51.15123874872134]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.927037577198497, 50.53235392251621]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.877896952317943, 53.34200421691124]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.55214167941287, 50.43769805461494]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.554368882985997, 54.54162043132523]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.364558561512606, 51.27405754018532]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.75770810683446, 52.44852408188941]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.726921202621092, 53.072824131744134]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.27068501825943, 51.45652637410884]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.061061525674663, 54.30362000068474]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.433571081904134, 51.693937241649195]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.643774712925506, 52.716960605750806]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.67424219073253, 52.74743237920983]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.465166384539618, 53.999376113373316]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.158736289147804, 53.345037530050774]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.2313011364575, 52.208993067423464]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.931677109297702, 51.283867955299506]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.617966595527605, 51.61809581016764]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.050361796827847, 51.6512141813711]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.144082780533033, 52.35980427886385]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.460284688058277, 51.75591554727193]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.81607114111864, 53.35346490300273]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.721548708524814, 52.05827537825161]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.39371453081038, 51.971213785888246]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.696080701881435, 55.02692811064353]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.19481518037218, 51.27934850462075]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.60598366068417, 52.11051569796919]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.583048537815664, 52.50608885404017]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.983302397309238, 50.000716840450266]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.51670292981812, 51.95993296924752]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.77754433238611, 54.73074651474431]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.66592822113737, 51.416138164912454]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.808392189690753, 50.88358030681194]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.069026245339973, 52.52115026063997]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.902755912132378, 51.774346976980475]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.871375008596758, 51.38348473848001]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.86058439542399, 51.70888801888078]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.39029205762056, 49.79013092031055]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.616328004593125, 51.91752202632725]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.132368469477736, 53.514308522401414]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.607892561235687, 53.48461216613326]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.7304918058832, 50.81555431221176]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.283137685927468, 52.79457996253152]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.74603916257418, 50.956766899986526]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.25317531710951, 53.06656600399743]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.588807552152552, 51.59890825827793]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.645462346734163, 50.88089324898067]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.0662549151074, 52.402030158639896]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.16664470223904, 52.51156092458456]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.763445303396594, 52.09449677744532]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.49556100595351, 53.93976335271062]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.13728238811601, 52.470881334726066]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.342414848932954, 52.98584730706637]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.865579030923573, 52.644280502584344]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.793554516474646, 52.28913194437308]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.630272331517915, 52.149653254530165]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.103759542653933, 52.27175452326529]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.375777735298715, 52.75996870679491]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.977139385320832, 53.21586774289654]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.102077163927202, 52.108252775404694]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.453271676399048, 50.94809099616914]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.95885558641874, 51.414122455100326]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.35642745192651, 53.47823791699443]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.16775053185616, 52.70974793677432]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.91966295179522, 54.86970613457467]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.90561657731883, 51.519491714724026]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.929370276069417, 51.97867639654016]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.86944214936384, 51.257788191973916]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.897261744070192, 50.165389737816454]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.082064238855406, 50.24234918010531]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.010080871749373, 53.21752710841325]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.735277691978546, 49.93951516946891]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.059887395759986, 51.12133584867463]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.017656834219657, 51.866233267881256]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.301665324169942, 52.55106754750153]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.198929664727796, 51.92824472245219]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.50195282144883, 53.35079724342852]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.725690791128795, 50.83769578236863]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.309918237655857, 52.27037526221185]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.922557694854625, 52.77409354193672]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.204835664188295, 53.29964933613782]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.503134087887762, 55.23995984989528]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.07116105908213, 51.25990788568342]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.193225032341147, 51.166300190325046]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.294348738358597, 51.8837340609517]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.06454514870577, 52.77497508250212]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.54712173252218, 52.251164513451045]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.3640635493176, 52.34869129167824]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.672583406451693, 51.62049467781885]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.638336289134504, 54.094427141456876]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.281136170556533, 51.283323411130155]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.8981159346686, 52.606770366805364]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.42218736587425, 51.17953618177544]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.430843026553607, 51.00375232297453]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.929446587240108, 51.964855758301596]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.343675162520007, 53.122147043848386]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.68768620978268, 51.738867849554204]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.96305618160762, 52.24800090202843]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.59221574993159, 53.28667174980418]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.23020956266554, 51.71251708450279]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.256540734925174, 53.757708951919916]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.442781689246342, 50.78163288025708]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.30954626799685, 52.31319095195293]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.98848563902829, 52.79047426905373]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.980455849754545, 52.56662536478341]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.118025409382703, 54.875820810714174]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.937712928352937, 52.51545941313123]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.648716092175338, 51.04389515509734]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.84042076564778, 54.65782893955277]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.11931188495543, 51.66345494916299]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.051092432495903, 52.78857759821808]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.353682192247515, 52.121687309417425]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [18.608942820727833, 52.05479783649134]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.63046278858447, 51.24255137698561]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.845893895862247, 53.13864007466096]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.75578431121093, 51.68552494250662]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.386057823752328, 51.18636241755286]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.88025167912722, 52.96812423729202]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.70355798778732, 51.34478077250737]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.312631270095384, 51.25535246001847]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.50666371443591, 53.011017671521394]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.922205098217084, 51.82022982805795]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.091549329630002, 49.55818730202564]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.392072156859513, 49.70224952592228]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.195220849685324, 52.67018967796216]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.683786163680494, 50.469394576805875]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.248994950645887, 50.58293155204491]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.320899319563363, 51.67355752211609]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.889364802840866, 51.82955512310115]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.557267814023668, 52.04655384323937]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.405360989283672, 53.511428899400975]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.188112666806607, 52.33689055061459]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.67252112175345, 51.4885889186634]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.01620632294435, 50.12565751649147]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.954294408323197, 51.12902792579347]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.430396959920003, 52.97845813897236]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.44328185854883, 49.729188568577094]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.78333008827785, 50.874423435417235]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.463165958305634, 52.59842724921922]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.170329698696744, 54.40637754809664]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.253327852364542, 50.523661746231305]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.536281066804097, 53.49713598201792]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.749969607963102, 51.865385402178326]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.38057107201566, 52.390851668495515]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.653612797835986, 53.28115496245963]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.032083331777624, 51.80244342038528]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.15925120170444, 51.633026603160175]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.122003977448852, 51.281132587397515]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.155870422322124, 53.08208778643718]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.50162552761291, 53.82851541004986]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.61016023787571, 53.994936341527165]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.456010307845276, 52.18722891214477]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.931141629613343, 52.57948403554865]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.95940740294942, 52.565907490605014]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.02727548073166, 51.95655164459025]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.779603722044545, 52.948551802025655]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.102006070839508, 51.44364239081649]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.449679881248176, 51.32497036911199]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.68460503921283, 51.08292802091087]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.71785311974177, 52.36902629296765]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.491645171791248, 51.92604081693008]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.66624875229827, 50.511217056948695]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.705483269494785, 52.16980212170059]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.268360879609272, 52.49733755080392]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.03886643998636, 50.862327383121524]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.56605067310664, 51.07358609586371]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.1842354157974, 51.522074368855094]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.883137536797175, 54.71754833616729]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.000701966455676, 54.85420273470377]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.677927188887676, 51.35194921773517]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.734931815972736, 52.673849592322576]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.417482933192197, 52.098646285054436]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.958842014384604, 52.94410083821608]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.87955637629227, 53.451718096799304]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.824912687479557, 53.26934583553677]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.272889365167217, 52.52660396329109]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [23.209659341773666, 51.75754465933359]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.384302216541816, 51.92411275536409]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.296755493805133, 52.37243847698051]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.63419011371904, 53.484204281814115]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.864339425108483, 52.27100960495584]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.4666905315489, 52.14921772581063]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.124481360080615, 53.637863299677846]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.12975285947716, 52.83541318711045]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [21.498218052452422, 53.67019389915553]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.19506871252667, 53.82022640823995]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.037506728751417, 51.94373187598097]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [22.137938060617422, 51.80687564681559]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.59606689021495, 51.9564438808364]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [20.132224689306966, 51.0888097766762]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_10, 5, 15, [19.898257083445444, 49.467559160602946])]);
}

var EXAMPLE_DATA, log_0;
var Lpl_itrack_leafletd3demo_client_DemoApp_2_classLit = createForClass('pl.itrack.leafletd3demo.client', 'DemoApp', null);
function $apply(arg0){
  return $clinit_DemoApp() , initUnidimensionalArray(Lpl_itrack_leafletd3demo_client_DemoApp$Coordinate_2_classLit, {3:1, 8:1, 104:1}, 23, arg0, 0, 1);
}

function DemoApp$Coordinate(longitude, latitude){
  this.latitude = latitude;
  this.longitude = longitude;
}

defineClass(23, 1, {23:1}, DemoApp$Coordinate);
_.latitude = 0;
_.longitude = 0;
var Lpl_itrack_leafletd3demo_client_DemoApp$Coordinate_2_classLit = createForClass('pl.itrack.leafletd3demo.client', 'DemoApp/Coordinate', 23);
function DemoApp$lambda$0$Type(){
}

defineClass(128, $wnd.Function, {}, DemoApp$lambda$0$Type);
_.exec_0 = function(){
  var mapOptions, map_0, tileLayerOptions, hexbinLayer, collected, lastArg0;
  $info(log_0, 'Initialized! Building Map...');
  mapOptions = $build($dragging(new MapOptions$Builder($wnd.L.latLng(52.233333, 21.016667), 6, 5), ($clinit_Boolean() , true)));
  map_0 = $wnd.L.map('map', mapOptions);
  tileLayerOptions = $build_0($attribution($maxZoom($minZoom(new TileLayerOptions$Builder, valueOf(3)), valueOf(8))));
  $wnd.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', tileLayerOptions).addTo(map_0);
  hexbinLayer = new $wnd.L.hexbinLayer($withRadius($withOpacity($withDuration(new HexbinLayer$Config$Builder, 500), 0.5), 12));
  hexbinLayer.colorRange(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 6, ['white', 'orange', 'red'])).colorValue(makeLambdaFunction(DemoApp$lambda$1$Type.prototype.calculate, DemoApp$lambda$1$Type, [])).radiusValue(makeLambdaFunction(DemoApp$lambda$2$Type.prototype.calculate, DemoApp$lambda$2$Type, [])).lng(makeLambdaFunction(DemoApp$lambda$3$Type.prototype.calculate, DemoApp$lambda$3$Type, [])).lat(makeLambdaFunction(DemoApp$lambda$4$Type.prototype.calculate, DemoApp$lambda$4$Type, [])).data((collected = castTo($reduce((lastArg0 = $map(stream(EXAMPLE_DATA), new DemoApp$lambda$5$Type) , of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$21$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_4, 14, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)])) , lastArg0), new ArrayList), 22) , castTo(collected.toArray_0($apply(collected.size())), 104)));
  hexbinLayer.addTo(map_0);
  $info(log_0, 'The map attached.');
}
;
function DemoApp$lambda$1$Type(){
}

defineClass(132, $wnd.Function, {}, DemoApp$lambda$1$Type);
_.calculate = function(arg0){
  return $clinit_DemoApp() , castToJsArray(arg0).length;
}
;
function DemoApp$lambda$2$Type(){
}

defineClass(133, $wnd.Function, {}, DemoApp$lambda$2$Type);
_.calculate = function(arg0){
  return $clinit_DemoApp() , castToJsArray(arg0).length;
}
;
function DemoApp$lambda$3$Type(){
}

defineClass(134, $wnd.Function, {}, DemoApp$lambda$3$Type);
_.calculate = function(arg0){
  return $clinit_DemoApp() , castTo(arg0, 23).longitude;
}
;
function DemoApp$lambda$4$Type(){
}

defineClass(135, $wnd.Function, {}, DemoApp$lambda$4$Type);
_.calculate = function(arg0){
  return $clinit_DemoApp() , castTo(arg0, 23).latitude;
}
;
function DemoApp$lambda$5$Type(){
}

defineClass(67, 1, {}, DemoApp$lambda$5$Type);
var Lpl_itrack_leafletd3demo_client_DemoApp$lambda$5$Type_2_classLit = createForClass('pl.itrack.leafletd3demo.client', 'DemoApp/lambda$5$Type', 67);
var D_classLit = createForPrimitive('double', 'D');
$clinit_Boolean();
_ = provide('java.lang.Boolean');
_.$isInstance = $isInstance;
_ = provide('java.lang.CharSequence');
_.$isInstance = $isInstance_0;
_ = provide('java.lang.Comparable');
_.$isInstance = $isInstance_1;
_ = provide('java.lang.Double');
_.$isInstance = $isInstance_3;
_ = provide('java.lang.Number');
_.$isInstance = $isInstance_2;
_ = provide('java.lang.String');
_.$isInstance = $isInstance_4;
_ = provide('java.lang.Throwable');
_.of = of;
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie10']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=DemoApp-0.js

