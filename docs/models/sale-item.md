# SaleItem

## Example Usage

```typescript
import { SaleItem } from "lapyme/models";

let value: SaleItem = {
  id: "5eed58b0-a969-4140-a985-c0a1306fa139",
  quantity: 8872.9,
  unitPrice: 28.72,
  unitCost: 6920.52,
  taxRateId: 9054.31,
  discountPercentage: "<value>",
  product: {
    id: "00fe674c-cb98-43e3-bb3c-aa5719b21075",
    name: "<value>",
    sku: "<value>",
  },
  warehouse: {
    id: "924fe1f7-d55b-4fa8-96e5-e97e2c487182",
    name: "<value>",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `quantity`                                          | *number*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `unitPrice`                                         | *number*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `unitCost`                                          | *number*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `taxRateId`                                         | *number*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `discountPercentage`                                | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `product`                                           | [models.SaleProduct](../models/sale-product.md)     | :heavy_check_mark:                                  | N/A                                                 |
| `warehouse`                                         | [models.SaleWarehouse](../models/sale-warehouse.md) | :heavy_check_mark:                                  | N/A                                                 |