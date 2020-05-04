
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { CepService } from './cep.service';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    	imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatTableModule,
        MatInputModule,
        HttpClientModule,
      ],
      providers: [CepService],
    }).compileComponents();
    
    
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'teste-helpper'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('teste-helpper');
  });
    
  it('Deve verificar a quantidade de itens no columns', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.columns.length).toEqual(9)
  });
  it('Deve receber um valor true para o array de persons', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.persons).toBeTruthy()
  });
  it('Verifica funcition addPerson', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.addPerson()).toBeUndefined()
  }); 

  it('Verifica funcition editPerson', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.editPerson('person')).toBeUndefined()
  }); 
  it('Verifica function deletePerson', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.changeCep.length).toEqual(1)
  })


});
