// Copyright (c) Jonathan Frederic, see the LICENSE file for more info.

import utils = require('../utils/utils');
import styles = require('./init');

/**
 * Style
 */
export class Style extends utils.PosterClass {
    constructor() {
        super([
            'comment',
            'string',
            'class-name',
            'keyword',
            'boolean',
            'function',
            'operator',
            'number',
            'ignore',
            'punctuation',

            'cursor',
            'cursor_width',
            'cursor_height',
            'selection',
            'selection_unfocused',

            'text',
            'background',
            'gutter',
            'gutter_text',
            'gutter_shadow'
        ]);

        // Load the default style.
        this.load('peacock');
    }

    /**
     * Gets a style attribute.
     */
    public get(key: string, default_value?: any): any {
        return this[key] !== undefined ? this[key] : default_value;
    }

    /**
     * Load a rendering style
     * @param  {string or dictionary} style - name of the built-in style 
     *         or style dictionary itself.
     * @return {boolean} success
     */
    load(style) {
        try {
            // Load the style if it's built-in.
            if (styles.styles[style]) {
                style = styles.styles[style].style;
            }

            // Read each attribute of the style.
            for (var key in style) {
                if (style.hasOwnProperty(key)) {
                    this[key] = style[key];
                }
            }
            
            return true;
        } catch (e) {
            console.error('Error loading style', e);
            return false;
        }
    }
}
