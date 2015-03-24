// Copyright (c) Jonathan Frederic, see the LICENSE file for more info.
import plugin = require('../plugin');
import utils = require('../../utils');
import renderer = require('./renderer');

/**
 * Line numbers plugin.
 */
export class LineNumbers extends plugin.PluginBase {
    private _renderer;
    
    constructor() {
        super();
        this.on('load', this._handle_load, this);
        this.on('unload', this._handle_unload, this);
    }

    /**
     * Handles when the plugin is loaded.
     */
    _handle_load() {
        this._renderer = new renderer.LineNumbersRenderer(this);
        this.register_renderer(this._renderer);
    }

    /**
     * Handles when the plugin is unloaded.
     */
    _handle_unload() {
        // Remove all listeners to this plugin's changed event.
        this._renderer.unregister();
    }
}