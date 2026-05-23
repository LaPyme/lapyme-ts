# ApiPurchaseOrderWriteResponsePurchaseOrder

## Example Usage

```typescript
import { ApiPurchaseOrderWriteResponsePurchaseOrder } from "lapyme/models";

let value: ApiPurchaseOrderWriteResponsePurchaseOrder = {
  object: "purchase_order",
  id: "dbcfa2f3-654d-4009-bc86-6fe0bd8509cb",
  orderNumber: 704354,
  formattedOrderNumber: "<value>",
  status: "draft",
  orderDate: new Date("2026-01-25"),
  expectedDate: new Date("2024-08-14"),
  currency: "Moroccan Dirham",
  supplier: {
    id: "029b15a1-4b48-4ae2-8956-aa146acbc3e8",
    name: "<value>",
    description: "fuss surprisingly instantly for um",
    email: "Haskell.Kohler@gmail.com",
    phone: "975.816.3992 x2143",
    taxIdType: "<value>",
    taxId: "<id>",
    taxCategory: "<value>",
    paymentTermId: "<id>",
    address: "93676 N Elm Street",
    apartment: "<value>",
    city: "Rickieshire",
    province: "<value>",
    postalCode: "34820-5124",
  },
  warehouse: {
    id: "cf9b148b-a551-4922-a341-01eeac0aecd5",
    name: "<value>",
  },
  createdAt: new Date("2026-07-07T23:06:39.464Z"),
  warehouseId: "66651082-e5fe-4697-bc10-1039fc3cd36f",
  notes: "<value>",
  items: [
    {
      id: "49bdd461-c768-4a69-a014-452a3d8d4113",
      orderedQuantity: 4007.4,
      receivedQuantity: 7550.27,
      expectedUnitCost: 443787,
      product: {
        id: "9e733944-f785-4ec8-95a8-abcc0d5ddc1d",
        name: "<value>",
        sku: "<value>",
        productType: "kit",
        variantOptions: {
          "key": "<value>",
          "key1": "<value>",
        },
        optionNames: [
          "<value 1>",
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                  | *"purchase_order"*                                                                                        | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `orderNumber`                                                                                             | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `formattedOrderNumber`                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `status`                                                                                                  | [models.ApiPurchaseOrderWriteResponseStatus](../models/api-purchase-order-write-response-status.md)       | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `orderDate`                                                                                               | [Date](../types/rfcdate.md)                                                                               | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `expectedDate`                                                                                            | [Date](../types/rfcdate.md)                                                                               | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `currency`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `supplier`                                                                                                | [models.ApiPurchaseOrderWriteResponseSupplier](../models/api-purchase-order-write-response-supplier.md)   | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `warehouse`                                                                                               | [models.ApiPurchaseOrderWriteResponseWarehouse](../models/api-purchase-order-write-response-warehouse.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `createdAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `warehouseId`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `notes`                                                                                                   | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `items`                                                                                                   | [models.ApiPurchaseOrderWriteResponseItem](../models/api-purchase-order-write-response-item.md)[]         | :heavy_check_mark:                                                                                        | N/A                                                                                                       |