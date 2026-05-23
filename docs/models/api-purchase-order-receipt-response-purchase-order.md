# ApiPurchaseOrderReceiptResponsePurchaseOrder

## Example Usage

```typescript
import { ApiPurchaseOrderReceiptResponsePurchaseOrder } from "lapyme/models";

let value: ApiPurchaseOrderReceiptResponsePurchaseOrder = {
  object: "purchase_order",
  id: "2b5f480f-02d1-4757-8ad0-f084558d081a",
  orderNumber: 385282,
  formattedOrderNumber: "<value>",
  status: "sent",
  orderDate: new Date("2024-10-29"),
  expectedDate: new Date("2026-01-28"),
  currency: "Tenge",
  supplier: null,
  warehouse: {
    id: "1b97705d-52d7-4bcd-9a08-9bddb77e1cb6",
    name: "<value>",
  },
  createdAt: new Date("2025-08-21T10:55:42.183Z"),
  warehouseId: "f9c9057d-889b-401c-9a34-8445e445a54f",
  notes: "<value>",
  items: [],
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                      | *"purchase_order"*                                                                                            | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `id`                                                                                                          | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `orderNumber`                                                                                                 | *number*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `formattedOrderNumber`                                                                                        | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `status`                                                                                                      | [models.ApiPurchaseOrderReceiptResponseStatus](../models/api-purchase-order-receipt-response-status.md)       | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `orderDate`                                                                                                   | [Date](../types/rfcdate.md)                                                                                   | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `expectedDate`                                                                                                | [Date](../types/rfcdate.md)                                                                                   | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `currency`                                                                                                    | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `supplier`                                                                                                    | [models.ApiPurchaseOrderReceiptResponseSupplier](../models/api-purchase-order-receipt-response-supplier.md)   | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `warehouse`                                                                                                   | [models.ApiPurchaseOrderReceiptResponseWarehouse](../models/api-purchase-order-receipt-response-warehouse.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `createdAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `warehouseId`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `notes`                                                                                                       | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `items`                                                                                                       | [models.ApiPurchaseOrderReceiptResponseItem](../models/api-purchase-order-receipt-response-item.md)[]         | :heavy_check_mark:                                                                                            | N/A                                                                                                           |