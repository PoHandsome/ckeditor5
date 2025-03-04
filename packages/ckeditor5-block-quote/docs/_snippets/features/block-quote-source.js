/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals window */

import ClassicEditor from '@ckeditor/ckeditor5-build-classic/src/ckeditor';

import { CS_CONFIG } from '@ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config';

ClassicEditor.defaultConfig = {
	cloudServices: CS_CONFIG,
	toolbar: {
		items: [
			'undo', 'redo', '|', 'heading',
			'|', 'bold', 'italic',
			'|', 'link', 'uploadImage', 'insertTable', 'blockQuote', 'mediaEmbed',
			'|', 'bulletedList', 'numberedList', 'outdent', 'indent'
		]
	},
	ui: {
		viewportOffset: {
			top: window.getViewportTopOffsetConfig()
		}
	},
	image: {
		toolbar: [ 'imageTextAlternative' ]
	}
};

window.ClassicEditor = ClassicEditor;
