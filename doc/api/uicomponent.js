/**
* @name jsPlumbUIComponent
* @class
* @classdesc Abstract superclass for UI components Endpoint and Connection.  Provides the abstraction of paintStyle/hoverPaintStyle,
* and also extends jsPlumbUtil.EventGenerator to provide the bind and fire methods.
* @extends jsPlumbUtil.EventGenerator
*/

/**
* @name jsPlumbUIComponent#getParameter
* @function
* @param {String} name Name of the parameter to get
* @desc Gets a parameter from the component
* @returns {Object} The given parameter's value, null if not found.
*/

/**
* @name jsPlumbUIComponent#setParameter
* @function
* @param {String} name Name of the parameter to set
* @param {Object} value Value to set
* @desc Sets a parameter on the component			
*/

/**
* @name jsPlumbUIComponent#getParameters
* @function
* @desc Gets all parameters from the component. Note that you are given the actual parameters
* object, not a copy, so you can alter their values directly, and if you hold the reference
* to the parameters object you could cause a memory leak.
* @returns {Object} All of the component's parameters.
*/

/**
* @name jsPlumbUIComponent#setParameters
* @function
* @param {Object} params Parameters to set.
* @desc Sets all parameters on the component.
*/

/**
* @name jsPlumbUIComponent#addClass
* @function
* @param {String} class The class(es) to add. The values are 
* appended as given, meaning you can supply a space separated string of several classes if you wish.
* @desc Adds a class or some classes to the visual elements for the given component. 
*/

/**
* @name jsPlumbUIComponent#removeClass
* @function
* @param {String} class The class(es) to remove.
* @desc Removes a class or some classes from the visual elements for the given component. You can supply a space separated string of several classes if you wish.
*/

/**
* @name jsPlumbUIComponent#setType
* @function
* @param {String} typeId Id of the type to set.
* @param {Object} [params] Optional parameter object to expand.
* @param {Boolean} [doNotRepaint] Defaults to false; tells jsPlumb not to repaint after setting the type.
* @desc This function sets a `type` for the given component. It replaces all existing types. For a full discussion of the concept
* of types, see the jsPlumb documentation.
*/

/**
* @name jsPlumbUIComponent#getType
* @function
* @desc Gets the current type - or types - for this component.
* @return {Array} The current list of types, empty if none registered.
*/

/**
* @name jsPlumbUIComponent#reapplyTypes
* @function
* @param {Object} [params] Optional params to use when reapplying types.
* @desc Reapplies the current list of types with the given (optional) parameters. See the 
* jsPlumb documentation for a full discussion of types.
*/

/**
* @name jsPlumbUIComponent#hasType
* @function
* @param {String} typeId Id of the type to check for
* @desc Returns whether or not the component currently has the given type.
* @returns {Boolean} True if the component has the type, false if not.
*/

/**
* @name jsPlumbUIComponent#addType
* @function
* @param {String} typeId Id of the type to add.
* @param {Object} [params] Optional params to use when applying the type.
* @param {Boolean} [doNotRepaint] Defaults to false; tells jsPlumb not to repaint after adding the type.
* @desc Adds a type to the component. Note this is distinct from {@link jsPlumbUIComponent#setType}, which overrides all current types - this function just adds a type to the existing list.
*/

/**
* @name jsPlumbUIComponent#removeType
* @function
* @param {String} typeId Id of the type to remove.
* @param {Boolean} [doNotRepaint] Defaults to false; tells jsPlumb not to repaint after removing the type.
* @desc Removes the given type from the component.			
*/

/**
* @name jsPlumbUIComponent#toggleType
* @function
* @param {String} typeId Id of the type to toggle.
* @param {Object} [params] Optional params to use if the type does not exist and jsPlumb applies it.
* @param {Boolean} [doNotRepaint] Defaults to false; tells jsPlumb not to repaint after toggling the type.
* @desc Toggles the given type on the component.			
*/

/**
* @name jsPlumbUIComponent#isHover
* @function
* @desc Returns whether or not the object is currently in hover state
* @returns {Boolean} True if in hover state, false if not.
*/

/**
* @name jsPlumbUIComponent#setHoverPaintStyle
* @function
* @desc Sets the paint style to use when the mouse is hovering over the component. This is null by default.
* The hover paint style is applied as extensions to the paintStyle; it does not entirely replace
* it. This is because people will most likely want to change just one thing when hovering, say the
* color for example, but leave the rest of the appearance the same.
* @param {Object} style Style to use when the mouse is hovering.
* @param {Boolean} [doNotRepaint] If true, the component will not be repainted. Useful when setting things up initially.
*/

/**
* @name jsPlumbUIComponent#setHover
* @function
* @desc Sets/unsets the hover state of this component.
* @param {Boolean} hover Hover state boolean
* @param {Boolean} [ignoreAttachedElements] If true, does not notify any attached elements of the change in hover state.  Used mostly by jsPlumb internally, to avoid infinite loops.
*/

/**
* @name jsPlumbUIComponent#setPaintStyle
* @function
* @desc Sets the component's paint style and then repaints the component.
* @param {Object} style Style to use.
* @param {Boolean} [doNotRepaint] If true, the component will not be repainted.
*/


