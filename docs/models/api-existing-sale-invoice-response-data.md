# ApiExistingSaleInvoiceResponseData

## Example Usage

```typescript
import { ApiExistingSaleInvoiceResponseData } from "lapyme/models";

let value: ApiExistingSaleInvoiceResponseData = {
  saleId: "f51cd06f-b475-4875-98ec-67083c60fa29",
  status: "issued",
  invoiceStatus: "pending",
  pdfStatus: "stored",
  invoiceNumber: 434554,
  formattedInvoiceNumber: "<value>",
  idempotentReplay: false,
  failureCode: "<value>",
  retryable: false,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `saleId`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `status`                                                                                              | [models.ApiExistingSaleInvoiceResponseStatus](../models/api-existing-sale-invoice-response-status.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `invoiceStatus`                                                                                       | [models.ApiSharedEnum9ac70a3316](../models/api-shared-enum9ac70a3316.md)                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `pdfStatus`                                                                                           | [models.PdfStatus](../models/pdf-status.md)                                                           | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `invoiceNumber`                                                                                       | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `formattedInvoiceNumber`                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `idempotentReplay`                                                                                    | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `failureCode`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `retryable`                                                                                           | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |