/* General */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* Component */
import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { ListTitleEditorComponent } from './list-title-editor/list-title-editor.component';
import { DeleteConfimationDialogComponent } from './delete-confimation-dialog/delete-confimation-dialog.component';
import { ItemEditorComponent } from './item-editor/item-editor.component';
//TODO:DeleteConfimationDialogComponentと統合したい
import { ItemDeleteConfimationDialogComponent } from './item-delete-confimation-dialog/item-delete-confimation-dialog.component';

/* UI Library */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

/* Angular Flex */
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ListTitleEditorComponent,
    DeleteConfimationDialogComponent,
    ItemEditorComponent,
    ItemDeleteConfimationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule 
  ],
  entryComponents: [
    ListTitleEditorComponent, 
    DeleteConfimationDialogComponent,
    ItemEditorComponent,
    ItemDeleteConfimationDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
