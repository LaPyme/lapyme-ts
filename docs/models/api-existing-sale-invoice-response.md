# ApiExistingSaleInvoiceResponse

## Example Usage

```typescript
import { ApiExistingSaleInvoiceResponse } from "lapyme/models";

let value: ApiExistingSaleInvoiceResponse = {
  requestId: "<id>",
  data: {
    saleId: "079aa345-9b73-4db1-952d-a292314870cd",
    status: "deferred",
    invoiceStatus: "issued",
    pdfStatus: "pending",
    invoiceNumber: 852349,
    formattedInvoiceNumber: null,
    idempotentReplay: false,
    failureCode: "<value>",
    retryable: true,
  },
  warnings: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `data`                                                                                            | [models.ApiExistingSaleInvoiceResponseData](../models/api-existing-sale-invoice-response-data.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `warnings`                                                                                        | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |