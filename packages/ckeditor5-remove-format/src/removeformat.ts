/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module remove-format/removeformat
 */

import { Plugin, type PluginDependencies } from 'ckeditor5/src/core';

import RemoveFormatUI from './removeformatui';
import RemoveFormatEditing from './removeformatediting';

/**
 * The remove format plugin.
 *
 * This is a "glue" plugin which loads the {@link module:remove-format/removeformatediting~RemoveFormatEditing}
 * and {@link module:remove-format/removeformatui~RemoveFormatUI} plugins.
 *
 * For a detailed overview, check out the {@glink features/remove-format remove format} feature documentation.
 */
export default class RemoveFormat extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get requires(): PluginDependencies {
		return [ RemoveFormatEditing, RemoveFormatUI ];
	}

	/**
	 * @inheritDoc
	 */
	public static get pluginName(): 'RemoveFormat' {
		return 'RemoveFormat';
	}
}
