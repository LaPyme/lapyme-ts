# ApiOrderInvoiceRequest

## Example Usage

```typescript
import { ApiOrderInvoiceRequest } from "lapyme/models";

let value: ApiOrderInvoiceRequest = {
  voucherType: 787677,
  pointOfSaleId: "6a6992a2-99cb-4dfd-9a2e-226f79c18a7a",
  invoiceDate: new Date("2025-05-02"),
  lines: [
    {
      orderLineId: "050fcd75-781a-43fd-ad5a-082001c3885b",
      quantityToInvoice: 26604,
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `voucherType`                                                                      | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `pointOfSaleId`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `invoiceDate`                                                                      | [Date](../types/rfcdate.md)                                                        | :heavy_check_mark:                                                                 | N/A                                                                                |
| `dueDate`                                                                          | [Date](../types/rfcdate.md)                                                        | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `notes`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `lines`                                                                            | [models.ApiOrderInvoiceRequestLine](../models/api-order-invoice-request-line.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |