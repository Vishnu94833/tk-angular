import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CENumberInput } from './ce-number-input.component';
import { CETranslateService } from '../../services/translate/translate.service';
import { CETestUtil } from '../../services/test/util/test.util';

describe('EditOrderLineDetails (inline template)', () => {
    let comp: CENumberInput;
    let fixture: ComponentFixture<CENumberInput>;
    let decButton: HTMLButtonElement;
    let incButton: HTMLButtonElement;
    let inputTextField: HTMLInputElement;

    beforeEach(done => {
        TestBed.configureTestingModule({
            declarations: [
                CENumberInput
            ],
            providers: [
                { provide: CETranslateService, useValue: CETestUtil.getTranslateServiceStub() }
            ],
            imports: [FormsModule],
            schemas: []
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(CENumberInput);
            comp = fixture.componentInstance;
            comp.enableOrderlineCancelPostReleasedFF=true;
            fixture.detectChanges();
            decButton = fixture.debugElement.query(By.css("#decrementButton")).nativeElement;
            incButton = fixture.debugElement.query(By.css("#incrementButton")).nativeElement;
            inputTextField = fixture.debugElement.query(By.css("#inputTextField")).nativeElement;
            done();
        });
    });

    it(' component instance should be truthy', () => {
        fixture.detectChanges();
        expect(comp).toBeDefined();
    });

    it('when click decrement button it should decrement quantity', () => {
        fixture.detectChanges();
        comp.quantity = 1;
        let updateButton = fixture.debugElement.query(By.css("#decrementButton"));

        //triggerEventHandler simulates a click event on the button object
        updateButton.triggerEventHandler('click', null);
        comp.decrement(comp.quantity);
        fixture.detectChanges();
        expect(comp.quantity).toBe(1);
        spyOn(comp.updateQuantityValue, 'emit');
    })

    it('when click increment button it should increment quantity', () => {
        fixture.detectChanges();
        comp.quantity = 1;
        let updateButton = fixture.debugElement.query(By.css("#incrementButton"));
        fixture.detectChanges();
        //triggerEventHandler simulates a click event on the button object
        // updateButton.triggerEventHandler('click', null);
        comp.increment(comp.quantity);
        fixture.detectChanges();
        expect(comp.quantity).toBe(2);
        spyOn(comp.updateQuantityValue, 'emit');
    })

    it('should check decrement button is disabled after isDecrementDisabled changed', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            comp.isDecrementDisabled = true;
            fixture.detectChanges();
            expect(decButton.disabled).toBe(true);
            expect(incButton.disabled).toBe(false);
            comp.isTextFieldDisable();
            fixture.detectChanges();
            expect(inputTextField.disabled).toBe(false);
        });
    }));

    it('should check increment button is disabled after isIncrementDisabled changed', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            comp.isIncrementDisabled = true;
            fixture.detectChanges();
            expect(decButton.disabled).toBe(false);
            expect(incButton.disabled).toBe(true);
            comp.isTextFieldDisable();
            fixture.detectChanges();
            expect(inputTextField.disabled).toBe(false);
        });
    }));

    it('should check when increment and decrement button both disabled', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            comp.isIncrementDisabled = false;
            comp.isDecrementDisabled = false;
            fixture.detectChanges();
            expect(decButton.disabled).toBe(false);
            expect(incButton.disabled).toBe(false);
            comp.isTextFieldDisable();
            fixture.detectChanges();
            expect(inputTextField.disabled).toBe(false);
        });
    }));

    it('should check when increment and decrement button both enabled', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            comp.isIncrementDisabled = true;
            comp.isDecrementDisabled = true;
            fixture.detectChanges();
            expect(decButton.disabled).toBe(true);
            expect(incButton.disabled).toBe(true);
        });
    }));

});

