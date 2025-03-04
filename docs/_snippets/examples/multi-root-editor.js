/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console, window, document */

import { CS_CONFIG } from '@ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config';
import MultiRootEditor from '@ckeditor/ckeditor5-build-multi-root/src/ckeditor';

MultiRootEditor
	.create(
		// Define roots / editable areas:
		{
			header: document.querySelector( '#header' ),
			content: document.querySelector( '#content' ),
			leftSide: document.querySelector( '#left-side' ),
			rightSide: document.querySelector( '#right-side' )
		},
		// Editor configration:
		{
			cloudServices: CS_CONFIG
		}
	)
	.then( editor => {
		window.editor = editor;

		// Append toolbar to a proper container.
		const toolbarContainer = document.querySelector( '#toolbar' );
		toolbarContainer.appendChild( editor.ui.view.toolbar.element );

		// Make toolbar sticky when the editor is focused.
		editor.ui.focusTracker.on( 'change:isFocused', () => {
			if ( editor.ui.focusTracker.isFocused ) {
				toolbarContainer.classList.add( 'sticky' );
			} else {
				toolbarContainer.classList.remove( 'sticky' );
			}
		} );
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
