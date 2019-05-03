import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const getTable = (data) => {
	let result = [];
	for (let i = 0; i < data.length; i++) {
		let row = [];
		for (let j = 0; j < data.length; j++) {
			if (data[i].pos[0] == (i + 1))
			{
				if (data[j].pos[1] == (i + 1)) {
					row.push(data[j].type);
				} else {
					row.push('')
				}
			}
		}
		result.push(row)
	}
	return result
}

// export interface Results {
// 	[index: number] : Array<string>
// }

const items = {
  "data": [
    { "type": "A", "pos": [1, 1], "cost": 1, "amount": 10 },
    { "type": "B", "pos": [2, 2], "cost": 2, "amount": 8 },
    { "type": "C", "pos": [3, 3], "cost": 3, "amount": 3 },
    { "type": "A", "pos": [4, 4], "cost": 4, "amount": 2 },
    { "type": "B", "pos": [5, 5], "cost": 5, "amount": 12 },
    { "type": "C", "pos": [6, 6], "cost": 1, "amount": 4 },
    { "type": "A", "pos": [7, 7], "cost": 2, "amount": 5 },
    { "type": "B", "pos": [8, 8], "cost": 3, "amount": 6 },
    { "type": "C", "pos": [9, 9], "cost": 4, "amount": 4 }
  ]
};

const result = getTable(items.data);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: 'itemsTable';
  items = result;
}
