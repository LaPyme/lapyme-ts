# InvoiceApiSaleResponse

## Example Usage

```typescript
import { InvoiceApiSaleResponse } from "lapyme/models/operations";

let value: InvoiceApiSaleResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApiExistingSaleInvoiceResponse](../../models/api-existing-sale-invoice-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |