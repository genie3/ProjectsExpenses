import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ExpensesEditComponent } from '../expenses/expenses-edit/expenses-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<ExpensesEditComponent> {
    canDeactivate(component: ExpensesEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to leave? Any unsaved changes will be lost');
        }
        return true;
    }
}
