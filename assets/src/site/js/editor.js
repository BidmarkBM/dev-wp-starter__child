// An example of how tom add a custom button to the TinyMCE editor
// To add more, simply copy the code and change the button name and icon, then update the reference in the php registration
tinymce.PluginManager.add('fontweightlight', function (editor, url) {
	editor.addButton('fontweightlight', {
		text: ' L ', // No text for the button
		icon: 'custom',
		onclick: function () {
			var node = editor.selection.getNode();
			var isInsideTags = editor.dom.getParent(node, '.font-weight-light');

			if (isInsideTags) {
				// If inside tags, extract the content and remove the custom tags
				var content = isInsideTags.innerHTML;
				editor.dom.remove(isInsideTags);
				editor.selection.setContent(content);
				// This below updates the content of the editor, but doesn't save it
				editor.insertContent('');
			} else {
				// If not inside tags, add the custom tags
				editor.insertContent(
					'<span class="font-weight-light" style="font-weight: 200;">' +
						editor.selection.getContent() +
						'</span>'
				);
			}
		},
		onPostRender: function () {
			// Update the button state based on the current selection
			var self = this;
			editor.on('NodeChange', function () {
				var node = editor.selection.getNode();
				var isInsideTags = editor.dom.getParent(
					node,
					'.font-weight-light'
				);
				self.active(isInsideTags !== null);
			});
			// Set default styles for the content only for this instance
			editor.settings.content_style = 'body { font-weight: bold; }';
		},
	});
});
