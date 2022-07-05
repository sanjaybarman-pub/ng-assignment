import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { By } from '@angular/platform-browser';

import { Route2Component } from './route2.component';

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'ihoe 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
    images: [],
  },
  {
    id: 2,
    title: 'iPhone X',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
    images: [],
  },
  {
    id: 3,
    title: 'Samsung Universe 9',
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail: 'https://dummyjson.com/image/i/products/3/thumbnail.jpg',
    images: [],
  },
];

describe('Route2Component', () => {
  let component: Route2Component;
  let fixture: ComponentFixture<Route2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Route2Component],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Route2Component);
    component = fixture.componentInstance;
    component.sortControl = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#productList', () => {
    it('If lowToHigh, should sort in ascending order', () => {
      component.productList = MOCK_PRODUCTS;
      component.sortControl.setValue('lowToHigh');
      const mockProductsAsc = MOCK_PRODUCTS.sort((a, b) => a.price - b.price);
      expect(component.productList).toEqual(mockProductsAsc);
    });

    it('If highToLow, should sort in descending order', () => {
      component.productList = MOCK_PRODUCTS;
      component.sortControl.setValue('highToLow');
      const mockProductsDesc = MOCK_PRODUCTS.sort((a, b) => a.price - b.price);
      expect(component.productList).toEqual(mockProductsDesc);
    });

    it('If recommended, should sort with Ids', () => {
      component.productList = MOCK_PRODUCTS;
      const mockProductsSortedById = MOCK_PRODUCTS.sort((a, b) => b.id - a.id);
      expect(component.productList).toEqual(mockProductsSortedById);
      component.sortControl.setValue('recommended');
    });
  });

  it('should update #currentView', () => {
    const toggleButtonEl = fixture.debugElement.query(
      By.css('#view-button-group')
    );
    toggleButtonEl.triggerEventHandler('change', { value: 'list' });
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const ev: MatButtonToggleChange = {
        source: null,
        value: 'list',
      };
      const mockFn = spyOn(component, 'onChange');
      expect(mockFn).toHaveBeenCalledWith(ev);
      expect(component.currentView).toBe('list');
    });
  });
});
