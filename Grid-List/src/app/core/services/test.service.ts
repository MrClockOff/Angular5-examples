import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {TestItem} from '../models/test-item.model';

const images: string[] = [
  'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg',
  'https://images.pexels.com/photos/64252/rose-petal-flower-macro-64252.jpeg',
  'https://images.pexels.com/photos/54323/rose-composites-flowers-spring-54323.jpeg',
  'https://images.pexels.com/photos/53352/pink-tulip-flower-spring-53352.jpeg',
  'https://images.pexels.com/photos/62264/pexels-photo-62264.jpeg'
];

@Injectable()
export class TestService {
  private static getItem(index: number): TestItem {
    return {
      id: `${index}`,
      title: `title ${index}`,
      description: `description ${index}`,
      timeStamp: Date.now().toString(),
      imageUrl: TestService.getImageUrl(index)
    } as TestItem;
  }

  private static getImageUrl(index: number): string {
    let i = index;

    while (i > images.length) {
      i = i % images.length;
    }

    return images[i];
  }

  fetch(): Observable<TestItem[]> {
    return new Observable(subject => {
      const collection: TestItem[] = [];

      for (let i = 0; i < 50; i++) {
        collection.push(TestService.getItem(i));
      }

      subject.next(collection);

      setTimeout(() => {
        for (let i = 50; i < 5000; i++) {
          collection.push(TestService.getItem(i));
        }

        subject.next(collection);
        subject.complete();
      }, 1000);
    });
  }
}
