import { App } from './app.component';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
describe('App', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [App]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(App);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <h1> text', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/angular/i, '<h1> should say something about "Angular"');
    });
});
//# sourceMappingURL=app.component.spec.js.map