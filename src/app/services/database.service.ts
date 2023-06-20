import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { getAuth } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';
import { database } from 'firebase.config';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  id: string | undefined = '';
  keysArray: string[] = [];
  productsMap: Map<string, string[]> = new Map();

  constructor(private authService: AuthService) {
    const auth = getAuth();
    const user = auth.currentUser;
    this.id = user?.uid;
  }

  getOrderHistory(orderKeys: string[], orderProducts: Map<string, string[]>) {
    const ordersRef = ref(database, `users/${this.id}/orders`);
    onValue(ordersRef, (snapshot) => {
      snapshot.forEach(childSnapshot => {
        let childKey = childSnapshot.key;
        if (childKey !== null) {
          orderKeys.push(childKey); // store the order key first

          /* Get the products ordered information per given key */
          let productsArray: string[] = [];
          const productsRef = ref(database, `users/${this.id}/orders/${childKey}/orderProducts/`);
          onValue(productsRef, (snapshot) => {
            snapshot.forEach(childSnapshot => {
              const childData = childSnapshot.val();
              if (childData !== null) productsArray.push(childData); // store the products array associated with the current key
            })
          })
          
          orderProducts.set(childKey, productsArray); // add new key-value pair to Map object
        }
      })
    })
  }
}
