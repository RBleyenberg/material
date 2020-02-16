(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/components-examples/cdk-experimental/popover-edit'), require('@angular/components-examples/cdk/a11y'), require('@angular/components-examples/cdk/clipboard'), require('@angular/components-examples/cdk/drag-drop'), require('@angular/components-examples/cdk/platform'), require('@angular/components-examples/cdk/portal'), require('@angular/components-examples/cdk/scrolling'), require('@angular/components-examples/cdk/stepper'), require('@angular/components-examples/cdk/table'), require('@angular/components-examples/cdk/text-field'), require('@angular/components-examples/cdk/tree'), require('@angular/components-examples/material-experimental/popover-edit'), require('@angular/components-examples/material/autocomplete'), require('@angular/components-examples/material/badge'), require('@angular/components-examples/material/bottom-sheet'), require('@angular/components-examples/material/button-toggle'), require('@angular/components-examples/material/button'), require('@angular/components-examples/material/card'), require('@angular/components-examples/material/checkbox'), require('@angular/components-examples/material/chips'), require('@angular/components-examples/material/core'), require('@angular/components-examples/material/datepicker'), require('@angular/components-examples/material/dialog'), require('@angular/components-examples/material/divider'), require('@angular/components-examples/material/expansion'), require('@angular/components-examples/material/form-field'), require('@angular/components-examples/material/grid-list'), require('@angular/components-examples/material/icon'), require('@angular/components-examples/material/input'), require('@angular/components-examples/material/list'), require('@angular/components-examples/material/menu'), require('@angular/components-examples/material/paginator'), require('@angular/components-examples/material/progress-bar'), require('@angular/components-examples/material/progress-spinner'), require('@angular/components-examples/material/radio'), require('@angular/components-examples/material/select'), require('@angular/components-examples/material/sidenav'), require('@angular/components-examples/material/slide-toggle'), require('@angular/components-examples/material/slider'), require('@angular/components-examples/material/snack-bar'), require('@angular/components-examples/material/sort'), require('@angular/components-examples/material/stepper'), require('@angular/components-examples/material/table'), require('@angular/components-examples/material/tabs'), require('@angular/components-examples/material/toolbar'), require('@angular/components-examples/material/tooltip'), require('@angular/components-examples/material/tree')) :
	typeof define === 'function' && define.amd ? define('slicing', ['exports', '@angular/components-examples/cdk-experimental/popover-edit', '@angular/components-examples/cdk/a11y', '@angular/components-examples/cdk/clipboard', '@angular/components-examples/cdk/drag-drop', '@angular/components-examples/cdk/platform', '@angular/components-examples/cdk/portal', '@angular/components-examples/cdk/scrolling', '@angular/components-examples/cdk/stepper', '@angular/components-examples/cdk/table', '@angular/components-examples/cdk/text-field', '@angular/components-examples/cdk/tree', '@angular/components-examples/material-experimental/popover-edit', '@angular/components-examples/material/autocomplete', '@angular/components-examples/material/badge', '@angular/components-examples/material/bottom-sheet', '@angular/components-examples/material/button-toggle', '@angular/components-examples/material/button', '@angular/components-examples/material/card', '@angular/components-examples/material/checkbox', '@angular/components-examples/material/chips', '@angular/components-examples/material/core', '@angular/components-examples/material/datepicker', '@angular/components-examples/material/dialog', '@angular/components-examples/material/divider', '@angular/components-examples/material/expansion', '@angular/components-examples/material/form-field', '@angular/components-examples/material/grid-list', '@angular/components-examples/material/icon', '@angular/components-examples/material/input', '@angular/components-examples/material/list', '@angular/components-examples/material/menu', '@angular/components-examples/material/paginator', '@angular/components-examples/material/progress-bar', '@angular/components-examples/material/progress-spinner', '@angular/components-examples/material/radio', '@angular/components-examples/material/select', '@angular/components-examples/material/sidenav', '@angular/components-examples/material/slide-toggle', '@angular/components-examples/material/slider', '@angular/components-examples/material/snack-bar', '@angular/components-examples/material/sort', '@angular/components-examples/material/stepper', '@angular/components-examples/material/table', '@angular/components-examples/material/tabs', '@angular/components-examples/material/toolbar', '@angular/components-examples/material/tooltip', '@angular/components-examples/material/tree'], factory) :
	(global = global || self, factory(global.slicing = {}, global.ng['components-examples']['cdk-experimental']['popover-edit'], global.ng['components-examples'].cdk.a11y, global.ng['components-examples'].cdk.clipboard, global.ng['components-examples'].cdk['drag-drop'], global.ng['components-examples'].cdk.platform, global.ng['components-examples'].cdk.portal, global.ng['components-examples'].cdk.scrolling, global.ng['components-examples'].cdk.stepper, global.ng['components-examples'].cdk.table, global.ng['components-examples'].cdk['text-field'], global.ng['components-examples'].cdk.tree, global.ng['components-examples']['material-experimental']['popover-edit'], global.ng['components-examples'].material.autocomplete, global.ng['components-examples'].material.badge, global.ng['components-examples'].material['bottom-sheet'], global.ng['components-examples'].material['button-toggle'], global.ng['components-examples'].material.button, global.ng['components-examples'].material.card, global.ng['components-examples'].material.checkbox, global.ng['components-examples'].material.chips, global.ng['components-examples'].material.core, global.ng['components-examples'].material.datepicker, global.ng['components-examples'].material.dialog, global.ng['components-examples'].material.divider, global.ng['components-examples'].material.expansion, global.ng['components-examples'].material['form-field'], global.ng['components-examples'].material['grid-list'], global.ng['components-examples'].material.icon, global.ng['components-examples'].material.input, global.ng['components-examples'].material.list, global.ng['components-examples'].material.menu, global.ng['components-examples'].material.paginator, global.ng['components-examples'].material['progress-bar'], global.ng['components-examples'].material['progress-spinner'], global.ng['components-examples'].material.radio, global.ng['components-examples'].material.select, global.ng['components-examples'].material.sidenav, global.ng['components-examples'].material['slide-toggle'], global.ng['components-examples'].material.slider, global.ng['components-examples'].material['snack-bar'], global.ng['components-examples'].material.sort, global.ng['components-examples'].material.stepper, global.ng['components-examples'].material.table, global.ng['components-examples'].material.tabs, global.ng['components-examples'].material.toolbar, global.ng['components-examples'].material.tooltip, global.ng['components-examples'].material.tree));
}(this, (function (exports, popoverEdit, a11y, clipboard, dragDrop, platform, portal, scrolling, stepper, table, textField, tree, popoverEdit$1, autocomplete, badge, bottomSheet, buttonToggle, button, card, checkbox, chips, core, datepicker, dialog, divider, expansion, formField, gridList, icon, input, list, menu, paginator, progressBar, progressSpinner, radio, select, sidenav, slideToggle, slider, snackBar, sort, stepper$1, table$1, tabs, toolbar, tooltip, tree$1) { 'use strict';

	/**
	 * Generated bundle index. Do not edit.
	 */

	Object.defineProperty(exports, 'CdkPopoverEditCdkTableExample', {
		enumerable: true,
		get: function () {
			return popoverEdit.CdkPopoverEditCdkTableExample;
		}
	});
	Object.defineProperty(exports, 'CdkPopoverEditCdkTableFlexExample', {
		enumerable: true,
		get: function () {
			return popoverEdit.CdkPopoverEditCdkTableFlexExample;
		}
	});
	Object.defineProperty(exports, 'CdkPopoverEditCellSpanVanillaTableExample', {
		enumerable: true,
		get: function () {
			return popoverEdit.CdkPopoverEditCellSpanVanillaTableExample;
		}
	});
	Object.defineProperty(exports, 'CdkPopoverEditTabOutVanillaTableExample', {
		enumerable: true,
		get: function () {
			return popoverEdit.CdkPopoverEditTabOutVanillaTableExample;
		}
	});
	Object.defineProperty(exports, 'CdkPopoverEditVanillaTableExample', {
		enumerable: true,
		get: function () {
			return popoverEdit.CdkPopoverEditVanillaTableExample;
		}
	});
	Object.defineProperty(exports, 'FocusMonitorDirectivesExample', {
		enumerable: true,
		get: function () {
			return a11y.FocusMonitorDirectivesExample;
		}
	});
	Object.defineProperty(exports, 'FocusMonitorFocusViaExample', {
		enumerable: true,
		get: function () {
			return a11y.FocusMonitorFocusViaExample;
		}
	});
	Object.defineProperty(exports, 'FocusMonitorOverviewExample', {
		enumerable: true,
		get: function () {
			return a11y.FocusMonitorOverviewExample;
		}
	});
	Object.defineProperty(exports, 'CdkClipboardOverviewExample', {
		enumerable: true,
		get: function () {
			return clipboard.CdkClipboardOverviewExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropAxisLockExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropAxisLockExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropBoundaryExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropBoundaryExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropConnectedSortingExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropConnectedSortingExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropConnectedSortingGroupExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropConnectedSortingGroupExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropCustomPlaceholderExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropCustomPlaceholderExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropCustomPreviewExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropCustomPreviewExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropDelayExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropDelayExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropDisabledExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropDisabledExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropDisabledSortingExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropDisabledSortingExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropEnterPredicateExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropEnterPredicateExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropFreeDragPositionExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropFreeDragPositionExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropHandleExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropHandleExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropHorizontalSortingExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropHorizontalSortingExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropOverviewExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropOverviewExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropRootElementExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropRootElementExample;
		}
	});
	Object.defineProperty(exports, 'CdkDragDropSortingExample', {
		enumerable: true,
		get: function () {
			return dragDrop.CdkDragDropSortingExample;
		}
	});
	Object.defineProperty(exports, 'CdkPlatformOverviewExample', {
		enumerable: true,
		get: function () {
			return platform.CdkPlatformOverviewExample;
		}
	});
	Object.defineProperty(exports, 'CdkPortalOverviewExample', {
		enumerable: true,
		get: function () {
			return portal.CdkPortalOverviewExample;
		}
	});
	Object.defineProperty(exports, 'ComponentPortalExample', {
		enumerable: true,
		get: function () {
			return portal.ComponentPortalExample;
		}
	});
	Object.defineProperty(exports, 'CdkVirtualScrollContextExample', {
		enumerable: true,
		get: function () {
			return scrolling.CdkVirtualScrollContextExample;
		}
	});
	Object.defineProperty(exports, 'CdkVirtualScrollCustomStrategyExample', {
		enumerable: true,
		get: function () {
			return scrolling.CdkVirtualScrollCustomStrategyExample;
		}
	});
	Object.defineProperty(exports, 'CdkVirtualScrollDataSourceExample', {
		enumerable: true,
		get: function () {
			return scrolling.CdkVirtualScrollDataSourceExample;
		}
	});
	Object.defineProperty(exports, 'CdkVirtualScrollDlExample', {
		enumerable: true,
		get: function () {
			return scrolling.CdkVirtualScrollDlExample;
		}
	});
	Object.defineProperty(exports, 'CdkVirtualScrollFixedBufferExample', {
		enumerable: true,
		get: function () {
			return scrolling.CdkVirtualScrollFixedBufferExample;
		}
	});
	Object.defineProperty(exports, 'CdkVirtualScrollHorizontalExample', {
		enumerable: true,
		get: function () {
			return scrolling.CdkVirtualScrollHorizontalExample;
		}
	});
	Object.defineProperty(exports, 'CdkVirtualScrollOverviewExample', {
		enumerable: true,
		get: function () {
			return scrolling.CdkVirtualScrollOverviewExample;
		}
	});
	Object.defineProperty(exports, 'CdkVirtualScrollTemplateCacheExample', {
		enumerable: true,
		get: function () {
			return scrolling.CdkVirtualScrollTemplateCacheExample;
		}
	});
	Object.defineProperty(exports, 'CdkCustomStepperWithoutFormExample', {
		enumerable: true,
		get: function () {
			return stepper.CdkCustomStepperWithoutFormExample;
		}
	});
	Object.defineProperty(exports, 'CustomStepper', {
		enumerable: true,
		get: function () {
			return stepper.CustomStepper;
		}
	});
	Object.defineProperty(exports, 'CdkTableBasicExample', {
		enumerable: true,
		get: function () {
			return table.CdkTableBasicExample;
		}
	});
	Object.defineProperty(exports, 'CdkTableBasicFlexExample', {
		enumerable: true,
		get: function () {
			return table.CdkTableBasicFlexExample;
		}
	});
	Object.defineProperty(exports, 'TextFieldAutofillDirectiveExample', {
		enumerable: true,
		get: function () {
			return textField.TextFieldAutofillDirectiveExample;
		}
	});
	Object.defineProperty(exports, 'TextFieldAutofillMonitorExample', {
		enumerable: true,
		get: function () {
			return textField.TextFieldAutofillMonitorExample;
		}
	});
	Object.defineProperty(exports, 'TextFieldAutosizeTextareaExample', {
		enumerable: true,
		get: function () {
			return textField.TextFieldAutosizeTextareaExample;
		}
	});
	Object.defineProperty(exports, 'CdkTreeFlatExample', {
		enumerable: true,
		get: function () {
			return tree.CdkTreeFlatExample;
		}
	});
	Object.defineProperty(exports, 'CdkTreeNestedExample', {
		enumerable: true,
		get: function () {
			return tree.CdkTreeNestedExample;
		}
	});
	Object.defineProperty(exports, 'PopoverEditCellSpanMatTableExample', {
		enumerable: true,
		get: function () {
			return popoverEdit$1.PopoverEditCellSpanMatTableExample;
		}
	});
	Object.defineProperty(exports, 'PopoverEditMatTableExample', {
		enumerable: true,
		get: function () {
			return popoverEdit$1.PopoverEditMatTableExample;
		}
	});
	Object.defineProperty(exports, 'PopoverEditMatTableFlexExample', {
		enumerable: true,
		get: function () {
			return popoverEdit$1.PopoverEditMatTableFlexExample;
		}
	});
	Object.defineProperty(exports, 'PopoverEditTabOutMatTableExample', {
		enumerable: true,
		get: function () {
			return popoverEdit$1.PopoverEditTabOutMatTableExample;
		}
	});
	Object.defineProperty(exports, 'AutocompleteAutoActiveFirstOptionExample', {
		enumerable: true,
		get: function () {
			return autocomplete.AutocompleteAutoActiveFirstOptionExample;
		}
	});
	Object.defineProperty(exports, 'AutocompleteDisplayExample', {
		enumerable: true,
		get: function () {
			return autocomplete.AutocompleteDisplayExample;
		}
	});
	Object.defineProperty(exports, 'AutocompleteFilterExample', {
		enumerable: true,
		get: function () {
			return autocomplete.AutocompleteFilterExample;
		}
	});
	Object.defineProperty(exports, 'AutocompleteOptgroupExample', {
		enumerable: true,
		get: function () {
			return autocomplete.AutocompleteOptgroupExample;
		}
	});
	Object.defineProperty(exports, 'AutocompleteOverviewExample', {
		enumerable: true,
		get: function () {
			return autocomplete.AutocompleteOverviewExample;
		}
	});
	Object.defineProperty(exports, 'AutocompletePlainInputExample', {
		enumerable: true,
		get: function () {
			return autocomplete.AutocompletePlainInputExample;
		}
	});
	Object.defineProperty(exports, 'AutocompleteSimpleExample', {
		enumerable: true,
		get: function () {
			return autocomplete.AutocompleteSimpleExample;
		}
	});
	Object.defineProperty(exports, 'BadgeOverviewExample', {
		enumerable: true,
		get: function () {
			return badge.BadgeOverviewExample;
		}
	});
	Object.defineProperty(exports, 'BottomSheetOverviewExample', {
		enumerable: true,
		get: function () {
			return bottomSheet.BottomSheetOverviewExample;
		}
	});
	Object.defineProperty(exports, 'BottomSheetOverviewExampleSheet', {
		enumerable: true,
		get: function () {
			return bottomSheet.BottomSheetOverviewExampleSheet;
		}
	});
	Object.defineProperty(exports, 'ButtonToggleAppearanceExample', {
		enumerable: true,
		get: function () {
			return buttonToggle.ButtonToggleAppearanceExample;
		}
	});
	Object.defineProperty(exports, 'ButtonToggleExclusiveExample', {
		enumerable: true,
		get: function () {
			return buttonToggle.ButtonToggleExclusiveExample;
		}
	});
	Object.defineProperty(exports, 'ButtonToggleOverviewExample', {
		enumerable: true,
		get: function () {
			return buttonToggle.ButtonToggleOverviewExample;
		}
	});
	Object.defineProperty(exports, 'ButtonOverviewExample', {
		enumerable: true,
		get: function () {
			return button.ButtonOverviewExample;
		}
	});
	Object.defineProperty(exports, 'ButtonTypesExample', {
		enumerable: true,
		get: function () {
			return button.ButtonTypesExample;
		}
	});
	Object.defineProperty(exports, 'CardFancyExample', {
		enumerable: true,
		get: function () {
			return card.CardFancyExample;
		}
	});
	Object.defineProperty(exports, 'CardOverviewExample', {
		enumerable: true,
		get: function () {
			return card.CardOverviewExample;
		}
	});
	Object.defineProperty(exports, 'CheckboxConfigurableExample', {
		enumerable: true,
		get: function () {
			return checkbox.CheckboxConfigurableExample;
		}
	});
	Object.defineProperty(exports, 'CheckboxOverviewExample', {
		enumerable: true,
		get: function () {
			return checkbox.CheckboxOverviewExample;
		}
	});
	Object.defineProperty(exports, 'ChipsAutocompleteExample', {
		enumerable: true,
		get: function () {
			return chips.ChipsAutocompleteExample;
		}
	});
	Object.defineProperty(exports, 'ChipsDragDropExample', {
		enumerable: true,
		get: function () {
			return chips.ChipsDragDropExample;
		}
	});
	Object.defineProperty(exports, 'ChipsInputExample', {
		enumerable: true,
		get: function () {
			return chips.ChipsInputExample;
		}
	});
	Object.defineProperty(exports, 'ChipsOverviewExample', {
		enumerable: true,
		get: function () {
			return chips.ChipsOverviewExample;
		}
	});
	Object.defineProperty(exports, 'ChipsStackedExample', {
		enumerable: true,
		get: function () {
			return chips.ChipsStackedExample;
		}
	});
	Object.defineProperty(exports, 'ElevationOverviewExample', {
		enumerable: true,
		get: function () {
			return core.ElevationOverviewExample;
		}
	});
	Object.defineProperty(exports, 'RippleOverviewExample', {
		enumerable: true,
		get: function () {
			return core.RippleOverviewExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerApiExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerApiExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerColorExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerColorExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerCustomHeaderExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerCustomHeaderExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerCustomIconExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerCustomIconExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerDateClassExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerDateClassExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerDisabledExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerDisabledExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerEventsExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerEventsExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerFilterExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerFilterExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerFormatsExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerFormatsExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerLocaleExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerLocaleExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerMinMaxExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerMinMaxExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerMomentExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerMomentExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerOverviewExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerOverviewExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerStartViewExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerStartViewExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerTouchExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerTouchExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerValueExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerValueExample;
		}
	});
	Object.defineProperty(exports, 'DatepickerViewsSelectionExample', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerViewsSelectionExample;
		}
	});
	Object.defineProperty(exports, 'ExampleHeader', {
		enumerable: true,
		get: function () {
			return datepicker.ExampleHeader;
		}
	});
	Object.defineProperty(exports, 'DialogContentExample', {
		enumerable: true,
		get: function () {
			return dialog.DialogContentExample;
		}
	});
	Object.defineProperty(exports, 'DialogContentExampleDialog', {
		enumerable: true,
		get: function () {
			return dialog.DialogContentExampleDialog;
		}
	});
	Object.defineProperty(exports, 'DialogDataExample', {
		enumerable: true,
		get: function () {
			return dialog.DialogDataExample;
		}
	});
	Object.defineProperty(exports, 'DialogDataExampleDialog', {
		enumerable: true,
		get: function () {
			return dialog.DialogDataExampleDialog;
		}
	});
	Object.defineProperty(exports, 'DialogElementsExample', {
		enumerable: true,
		get: function () {
			return dialog.DialogElementsExample;
		}
	});
	Object.defineProperty(exports, 'DialogElementsExampleDialog', {
		enumerable: true,
		get: function () {
			return dialog.DialogElementsExampleDialog;
		}
	});
	Object.defineProperty(exports, 'DialogOverviewExample', {
		enumerable: true,
		get: function () {
			return dialog.DialogOverviewExample;
		}
	});
	Object.defineProperty(exports, 'DialogOverviewExampleDialog', {
		enumerable: true,
		get: function () {
			return dialog.DialogOverviewExampleDialog;
		}
	});
	Object.defineProperty(exports, 'DividerOverviewExample', {
		enumerable: true,
		get: function () {
			return divider.DividerOverviewExample;
		}
	});
	Object.defineProperty(exports, 'ExpansionExpandCollapseAllExample', {
		enumerable: true,
		get: function () {
			return expansion.ExpansionExpandCollapseAllExample;
		}
	});
	Object.defineProperty(exports, 'ExpansionOverviewExample', {
		enumerable: true,
		get: function () {
			return expansion.ExpansionOverviewExample;
		}
	});
	Object.defineProperty(exports, 'ExpansionStepsExample', {
		enumerable: true,
		get: function () {
			return expansion.ExpansionStepsExample;
		}
	});
	Object.defineProperty(exports, 'FormFieldAppearanceExample', {
		enumerable: true,
		get: function () {
			return formField.FormFieldAppearanceExample;
		}
	});
	Object.defineProperty(exports, 'FormFieldCustomControlExample', {
		enumerable: true,
		get: function () {
			return formField.FormFieldCustomControlExample;
		}
	});
	Object.defineProperty(exports, 'FormFieldErrorExample', {
		enumerable: true,
		get: function () {
			return formField.FormFieldErrorExample;
		}
	});
	Object.defineProperty(exports, 'FormFieldHintExample', {
		enumerable: true,
		get: function () {
			return formField.FormFieldHintExample;
		}
	});
	Object.defineProperty(exports, 'FormFieldLabelExample', {
		enumerable: true,
		get: function () {
			return formField.FormFieldLabelExample;
		}
	});
	Object.defineProperty(exports, 'FormFieldOverviewExample', {
		enumerable: true,
		get: function () {
			return formField.FormFieldOverviewExample;
		}
	});
	Object.defineProperty(exports, 'FormFieldPrefixSuffixExample', {
		enumerable: true,
		get: function () {
			return formField.FormFieldPrefixSuffixExample;
		}
	});
	Object.defineProperty(exports, 'FormFieldThemingExample', {
		enumerable: true,
		get: function () {
			return formField.FormFieldThemingExample;
		}
	});
	Object.defineProperty(exports, 'MyTelInput', {
		enumerable: true,
		get: function () {
			return formField.MyTelInput;
		}
	});
	Object.defineProperty(exports, 'GridListDynamicExample', {
		enumerable: true,
		get: function () {
			return gridList.GridListDynamicExample;
		}
	});
	Object.defineProperty(exports, 'GridListOverviewExample', {
		enumerable: true,
		get: function () {
			return gridList.GridListOverviewExample;
		}
	});
	Object.defineProperty(exports, 'IconOverviewExample', {
		enumerable: true,
		get: function () {
			return icon.IconOverviewExample;
		}
	});
	Object.defineProperty(exports, 'IconSvgExample', {
		enumerable: true,
		get: function () {
			return icon.IconSvgExample;
		}
	});
	Object.defineProperty(exports, 'InputClearableExample', {
		enumerable: true,
		get: function () {
			return input.InputClearableExample;
		}
	});
	Object.defineProperty(exports, 'InputErrorStateMatcherExample', {
		enumerable: true,
		get: function () {
			return input.InputErrorStateMatcherExample;
		}
	});
	Object.defineProperty(exports, 'InputErrorsExample', {
		enumerable: true,
		get: function () {
			return input.InputErrorsExample;
		}
	});
	Object.defineProperty(exports, 'InputFormExample', {
		enumerable: true,
		get: function () {
			return input.InputFormExample;
		}
	});
	Object.defineProperty(exports, 'InputHintExample', {
		enumerable: true,
		get: function () {
			return input.InputHintExample;
		}
	});
	Object.defineProperty(exports, 'InputOverviewExample', {
		enumerable: true,
		get: function () {
			return input.InputOverviewExample;
		}
	});
	Object.defineProperty(exports, 'InputPrefixSuffixExample', {
		enumerable: true,
		get: function () {
			return input.InputPrefixSuffixExample;
		}
	});
	Object.defineProperty(exports, 'ListOverviewExample', {
		enumerable: true,
		get: function () {
			return list.ListOverviewExample;
		}
	});
	Object.defineProperty(exports, 'ListSectionsExample', {
		enumerable: true,
		get: function () {
			return list.ListSectionsExample;
		}
	});
	Object.defineProperty(exports, 'ListSelectionExample', {
		enumerable: true,
		get: function () {
			return list.ListSelectionExample;
		}
	});
	Object.defineProperty(exports, 'MenuIconsExample', {
		enumerable: true,
		get: function () {
			return menu.MenuIconsExample;
		}
	});
	Object.defineProperty(exports, 'MenuOverviewExample', {
		enumerable: true,
		get: function () {
			return menu.MenuOverviewExample;
		}
	});
	Object.defineProperty(exports, 'MenuPositionExample', {
		enumerable: true,
		get: function () {
			return menu.MenuPositionExample;
		}
	});
	Object.defineProperty(exports, 'NestedMenuExample', {
		enumerable: true,
		get: function () {
			return menu.NestedMenuExample;
		}
	});
	Object.defineProperty(exports, 'PaginatorConfigurableExample', {
		enumerable: true,
		get: function () {
			return paginator.PaginatorConfigurableExample;
		}
	});
	Object.defineProperty(exports, 'PaginatorOverviewExample', {
		enumerable: true,
		get: function () {
			return paginator.PaginatorOverviewExample;
		}
	});
	Object.defineProperty(exports, 'ProgressBarBufferExample', {
		enumerable: true,
		get: function () {
			return progressBar.ProgressBarBufferExample;
		}
	});
	Object.defineProperty(exports, 'ProgressBarConfigurableExample', {
		enumerable: true,
		get: function () {
			return progressBar.ProgressBarConfigurableExample;
		}
	});
	Object.defineProperty(exports, 'ProgressBarDeterminateExample', {
		enumerable: true,
		get: function () {
			return progressBar.ProgressBarDeterminateExample;
		}
	});
	Object.defineProperty(exports, 'ProgressBarIndeterminateExample', {
		enumerable: true,
		get: function () {
			return progressBar.ProgressBarIndeterminateExample;
		}
	});
	Object.defineProperty(exports, 'ProgressBarQueryExample', {
		enumerable: true,
		get: function () {
			return progressBar.ProgressBarQueryExample;
		}
	});
	Object.defineProperty(exports, 'ProgressSpinnerConfigurableExample', {
		enumerable: true,
		get: function () {
			return progressSpinner.ProgressSpinnerConfigurableExample;
		}
	});
	Object.defineProperty(exports, 'ProgressSpinnerOverviewExample', {
		enumerable: true,
		get: function () {
			return progressSpinner.ProgressSpinnerOverviewExample;
		}
	});
	Object.defineProperty(exports, 'RadioNgModelExample', {
		enumerable: true,
		get: function () {
			return radio.RadioNgModelExample;
		}
	});
	Object.defineProperty(exports, 'RadioOverviewExample', {
		enumerable: true,
		get: function () {
			return radio.RadioOverviewExample;
		}
	});
	Object.defineProperty(exports, 'SelectCustomTriggerExample', {
		enumerable: true,
		get: function () {
			return select.SelectCustomTriggerExample;
		}
	});
	Object.defineProperty(exports, 'SelectDisabledExample', {
		enumerable: true,
		get: function () {
			return select.SelectDisabledExample;
		}
	});
	Object.defineProperty(exports, 'SelectErrorStateMatcherExample', {
		enumerable: true,
		get: function () {
			return select.SelectErrorStateMatcherExample;
		}
	});
	Object.defineProperty(exports, 'SelectFormExample', {
		enumerable: true,
		get: function () {
			return select.SelectFormExample;
		}
	});
	Object.defineProperty(exports, 'SelectHintErrorExample', {
		enumerable: true,
		get: function () {
			return select.SelectHintErrorExample;
		}
	});
	Object.defineProperty(exports, 'SelectInitialValueExample', {
		enumerable: true,
		get: function () {
			return select.SelectInitialValueExample;
		}
	});
	Object.defineProperty(exports, 'SelectMultipleExample', {
		enumerable: true,
		get: function () {
			return select.SelectMultipleExample;
		}
	});
	Object.defineProperty(exports, 'SelectNoRippleExample', {
		enumerable: true,
		get: function () {
			return select.SelectNoRippleExample;
		}
	});
	Object.defineProperty(exports, 'SelectOptgroupExample', {
		enumerable: true,
		get: function () {
			return select.SelectOptgroupExample;
		}
	});
	Object.defineProperty(exports, 'SelectOverviewExample', {
		enumerable: true,
		get: function () {
			return select.SelectOverviewExample;
		}
	});
	Object.defineProperty(exports, 'SelectPanelClassExample', {
		enumerable: true,
		get: function () {
			return select.SelectPanelClassExample;
		}
	});
	Object.defineProperty(exports, 'SelectReactiveFormExample', {
		enumerable: true,
		get: function () {
			return select.SelectReactiveFormExample;
		}
	});
	Object.defineProperty(exports, 'SelectResetExample', {
		enumerable: true,
		get: function () {
			return select.SelectResetExample;
		}
	});
	Object.defineProperty(exports, 'SelectValueBindingExample', {
		enumerable: true,
		get: function () {
			return select.SelectValueBindingExample;
		}
	});
	Object.defineProperty(exports, 'SidenavAutosizeExample', {
		enumerable: true,
		get: function () {
			return sidenav.SidenavAutosizeExample;
		}
	});
	Object.defineProperty(exports, 'SidenavBackdropExample', {
		enumerable: true,
		get: function () {
			return sidenav.SidenavBackdropExample;
		}
	});
	Object.defineProperty(exports, 'SidenavDisableCloseExample', {
		enumerable: true,
		get: function () {
			return sidenav.SidenavDisableCloseExample;
		}
	});
	Object.defineProperty(exports, 'SidenavDrawerOverviewExample', {
		enumerable: true,
		get: function () {
			return sidenav.SidenavDrawerOverviewExample;
		}
	});
	Object.defineProperty(exports, 'SidenavFixedExample', {
		enumerable: true,
		get: function () {
			return sidenav.SidenavFixedExample;
		}
	});
	Object.defineProperty(exports, 'SidenavModeExample', {
		enumerable: true,
		get: function () {
			return sidenav.SidenavModeExample;
		}
	});
	Object.defineProperty(exports, 'SidenavOpenCloseExample', {
		enumerable: true,
		get: function () {
			return sidenav.SidenavOpenCloseExample;
		}
	});
	Object.defineProperty(exports, 'SidenavOverviewExample', {
		enumerable: true,
		get: function () {
			return sidenav.SidenavOverviewExample;
		}
	});
	Object.defineProperty(exports, 'SidenavPositionExample', {
		enumerable: true,
		get: function () {
			return sidenav.SidenavPositionExample;
		}
	});
	Object.defineProperty(exports, 'SidenavResponsiveExample', {
		enumerable: true,
		get: function () {
			return sidenav.SidenavResponsiveExample;
		}
	});
	Object.defineProperty(exports, 'SlideToggleConfigurableExample', {
		enumerable: true,
		get: function () {
			return slideToggle.SlideToggleConfigurableExample;
		}
	});
	Object.defineProperty(exports, 'SlideToggleFormsExample', {
		enumerable: true,
		get: function () {
			return slideToggle.SlideToggleFormsExample;
		}
	});
	Object.defineProperty(exports, 'SlideToggleOverviewExample', {
		enumerable: true,
		get: function () {
			return slideToggle.SlideToggleOverviewExample;
		}
	});
	Object.defineProperty(exports, 'SliderConfigurableExample', {
		enumerable: true,
		get: function () {
			return slider.SliderConfigurableExample;
		}
	});
	Object.defineProperty(exports, 'SliderFormattingExample', {
		enumerable: true,
		get: function () {
			return slider.SliderFormattingExample;
		}
	});
	Object.defineProperty(exports, 'SliderOverviewExample', {
		enumerable: true,
		get: function () {
			return slider.SliderOverviewExample;
		}
	});
	Object.defineProperty(exports, 'PizzaPartyComponent', {
		enumerable: true,
		get: function () {
			return snackBar.PizzaPartyComponent;
		}
	});
	Object.defineProperty(exports, 'SnackBarComponentExample', {
		enumerable: true,
		get: function () {
			return snackBar.SnackBarComponentExample;
		}
	});
	Object.defineProperty(exports, 'SnackBarOverviewExample', {
		enumerable: true,
		get: function () {
			return snackBar.SnackBarOverviewExample;
		}
	});
	Object.defineProperty(exports, 'SnackBarPositionExample', {
		enumerable: true,
		get: function () {
			return snackBar.SnackBarPositionExample;
		}
	});
	Object.defineProperty(exports, 'SortOverviewExample', {
		enumerable: true,
		get: function () {
			return sort.SortOverviewExample;
		}
	});
	Object.defineProperty(exports, 'StepperEditableExample', {
		enumerable: true,
		get: function () {
			return stepper$1.StepperEditableExample;
		}
	});
	Object.defineProperty(exports, 'StepperErrorsExample', {
		enumerable: true,
		get: function () {
			return stepper$1.StepperErrorsExample;
		}
	});
	Object.defineProperty(exports, 'StepperLabelPositionBottomExample', {
		enumerable: true,
		get: function () {
			return stepper$1.StepperLabelPositionBottomExample;
		}
	});
	Object.defineProperty(exports, 'StepperOptionalExample', {
		enumerable: true,
		get: function () {
			return stepper$1.StepperOptionalExample;
		}
	});
	Object.defineProperty(exports, 'StepperOverviewExample', {
		enumerable: true,
		get: function () {
			return stepper$1.StepperOverviewExample;
		}
	});
	Object.defineProperty(exports, 'StepperStatesExample', {
		enumerable: true,
		get: function () {
			return stepper$1.StepperStatesExample;
		}
	});
	Object.defineProperty(exports, 'StepperVerticalExample', {
		enumerable: true,
		get: function () {
			return stepper$1.StepperVerticalExample;
		}
	});
	Object.defineProperty(exports, 'TableBasicExample', {
		enumerable: true,
		get: function () {
			return table$1.TableBasicExample;
		}
	});
	Object.defineProperty(exports, 'TableBasicFlexExample', {
		enumerable: true,
		get: function () {
			return table$1.TableBasicFlexExample;
		}
	});
	Object.defineProperty(exports, 'TableDynamicColumnsExample', {
		enumerable: true,
		get: function () {
			return table$1.TableDynamicColumnsExample;
		}
	});
	Object.defineProperty(exports, 'TableExpandableRowsExample', {
		enumerable: true,
		get: function () {
			return table$1.TableExpandableRowsExample;
		}
	});
	Object.defineProperty(exports, 'TableFilteringExample', {
		enumerable: true,
		get: function () {
			return table$1.TableFilteringExample;
		}
	});
	Object.defineProperty(exports, 'TableFooterRowExample', {
		enumerable: true,
		get: function () {
			return table$1.TableFooterRowExample;
		}
	});
	Object.defineProperty(exports, 'TableHttpExample', {
		enumerable: true,
		get: function () {
			return table$1.TableHttpExample;
		}
	});
	Object.defineProperty(exports, 'TableMultipleHeaderFooterExample', {
		enumerable: true,
		get: function () {
			return table$1.TableMultipleHeaderFooterExample;
		}
	});
	Object.defineProperty(exports, 'TableOverviewExample', {
		enumerable: true,
		get: function () {
			return table$1.TableOverviewExample;
		}
	});
	Object.defineProperty(exports, 'TablePaginationExample', {
		enumerable: true,
		get: function () {
			return table$1.TablePaginationExample;
		}
	});
	Object.defineProperty(exports, 'TableRowContextExample', {
		enumerable: true,
		get: function () {
			return table$1.TableRowContextExample;
		}
	});
	Object.defineProperty(exports, 'TableSelectionExample', {
		enumerable: true,
		get: function () {
			return table$1.TableSelectionExample;
		}
	});
	Object.defineProperty(exports, 'TableSortingExample', {
		enumerable: true,
		get: function () {
			return table$1.TableSortingExample;
		}
	});
	Object.defineProperty(exports, 'TableStickyColumnsExample', {
		enumerable: true,
		get: function () {
			return table$1.TableStickyColumnsExample;
		}
	});
	Object.defineProperty(exports, 'TableStickyComplexExample', {
		enumerable: true,
		get: function () {
			return table$1.TableStickyComplexExample;
		}
	});
	Object.defineProperty(exports, 'TableStickyComplexFlexExample', {
		enumerable: true,
		get: function () {
			return table$1.TableStickyComplexFlexExample;
		}
	});
	Object.defineProperty(exports, 'TableStickyFooterExample', {
		enumerable: true,
		get: function () {
			return table$1.TableStickyFooterExample;
		}
	});
	Object.defineProperty(exports, 'TableStickyHeaderExample', {
		enumerable: true,
		get: function () {
			return table$1.TableStickyHeaderExample;
		}
	});
	Object.defineProperty(exports, 'TableTextColumnAdvancedExample', {
		enumerable: true,
		get: function () {
			return table$1.TableTextColumnAdvancedExample;
		}
	});
	Object.defineProperty(exports, 'TableTextColumnExample', {
		enumerable: true,
		get: function () {
			return table$1.TableTextColumnExample;
		}
	});
	Object.defineProperty(exports, 'TableWrappedExample', {
		enumerable: true,
		get: function () {
			return table$1.TableWrappedExample;
		}
	});
	Object.defineProperty(exports, 'WrapperTable', {
		enumerable: true,
		get: function () {
			return table$1.WrapperTable;
		}
	});
	Object.defineProperty(exports, 'TabGroupAlignExample', {
		enumerable: true,
		get: function () {
			return tabs.TabGroupAlignExample;
		}
	});
	Object.defineProperty(exports, 'TabGroupAnimationsExample', {
		enumerable: true,
		get: function () {
			return tabs.TabGroupAnimationsExample;
		}
	});
	Object.defineProperty(exports, 'TabGroupAsyncExample', {
		enumerable: true,
		get: function () {
			return tabs.TabGroupAsyncExample;
		}
	});
	Object.defineProperty(exports, 'TabGroupBasicExample', {
		enumerable: true,
		get: function () {
			return tabs.TabGroupBasicExample;
		}
	});
	Object.defineProperty(exports, 'TabGroupCustomLabelExample', {
		enumerable: true,
		get: function () {
			return tabs.TabGroupCustomLabelExample;
		}
	});
	Object.defineProperty(exports, 'TabGroupDynamicExample', {
		enumerable: true,
		get: function () {
			return tabs.TabGroupDynamicExample;
		}
	});
	Object.defineProperty(exports, 'TabGroupDynamicHeightExample', {
		enumerable: true,
		get: function () {
			return tabs.TabGroupDynamicHeightExample;
		}
	});
	Object.defineProperty(exports, 'TabGroupHeaderBelowExample', {
		enumerable: true,
		get: function () {
			return tabs.TabGroupHeaderBelowExample;
		}
	});
	Object.defineProperty(exports, 'TabGroupLazyLoadedExample', {
		enumerable: true,
		get: function () {
			return tabs.TabGroupLazyLoadedExample;
		}
	});
	Object.defineProperty(exports, 'TabGroupStretchedExample', {
		enumerable: true,
		get: function () {
			return tabs.TabGroupStretchedExample;
		}
	});
	Object.defineProperty(exports, 'TabGroupThemeExample', {
		enumerable: true,
		get: function () {
			return tabs.TabGroupThemeExample;
		}
	});
	Object.defineProperty(exports, 'TabNavBarBasicExample', {
		enumerable: true,
		get: function () {
			return tabs.TabNavBarBasicExample;
		}
	});
	Object.defineProperty(exports, 'ToolbarMultirowExample', {
		enumerable: true,
		get: function () {
			return toolbar.ToolbarMultirowExample;
		}
	});
	Object.defineProperty(exports, 'ToolbarOverviewExample', {
		enumerable: true,
		get: function () {
			return toolbar.ToolbarOverviewExample;
		}
	});
	Object.defineProperty(exports, 'TooltipAutoHideExample', {
		enumerable: true,
		get: function () {
			return tooltip.TooltipAutoHideExample;
		}
	});
	Object.defineProperty(exports, 'TooltipCustomClassExample', {
		enumerable: true,
		get: function () {
			return tooltip.TooltipCustomClassExample;
		}
	});
	Object.defineProperty(exports, 'TooltipDelayExample', {
		enumerable: true,
		get: function () {
			return tooltip.TooltipDelayExample;
		}
	});
	Object.defineProperty(exports, 'TooltipDisabledExample', {
		enumerable: true,
		get: function () {
			return tooltip.TooltipDisabledExample;
		}
	});
	Object.defineProperty(exports, 'TooltipManualExample', {
		enumerable: true,
		get: function () {
			return tooltip.TooltipManualExample;
		}
	});
	Object.defineProperty(exports, 'TooltipMessageExample', {
		enumerable: true,
		get: function () {
			return tooltip.TooltipMessageExample;
		}
	});
	Object.defineProperty(exports, 'TooltipModifiedDefaultsExample', {
		enumerable: true,
		get: function () {
			return tooltip.TooltipModifiedDefaultsExample;
		}
	});
	Object.defineProperty(exports, 'TooltipOverviewExample', {
		enumerable: true,
		get: function () {
			return tooltip.TooltipOverviewExample;
		}
	});
	Object.defineProperty(exports, 'TooltipPositionExample', {
		enumerable: true,
		get: function () {
			return tooltip.TooltipPositionExample;
		}
	});
	Object.defineProperty(exports, 'TreeChecklistExample', {
		enumerable: true,
		get: function () {
			return tree$1.TreeChecklistExample;
		}
	});
	Object.defineProperty(exports, 'TreeDynamicExample', {
		enumerable: true,
		get: function () {
			return tree$1.TreeDynamicExample;
		}
	});
	Object.defineProperty(exports, 'TreeFlatOverviewExample', {
		enumerable: true,
		get: function () {
			return tree$1.TreeFlatOverviewExample;
		}
	});
	Object.defineProperty(exports, 'TreeLoadmoreExample', {
		enumerable: true,
		get: function () {
			return tree$1.TreeLoadmoreExample;
		}
	});
	Object.defineProperty(exports, 'TreeNestedOverviewExample', {
		enumerable: true,
		get: function () {
			return tree$1.TreeNestedOverviewExample;
		}
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=slicing.umd.js.map
