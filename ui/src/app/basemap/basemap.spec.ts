import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basemap } from './basemap';

describe('Basemap', () => {
  let component: Basemap;
  let fixture: ComponentFixture<Basemap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Basemap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basemap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
