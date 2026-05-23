# VoidApiSupplierPaymentResponse

## Example Usage

```typescript
import { VoidApiSupplierPaymentResponse } from "lapyme/models/operations";

let value: VoidApiSupplierPaymentResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      supplierPayment: {
        id: "92430f55-f225-4257-a15b-28ce143cbfc2",
        voided: false,
      },
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApiSupplierPaymentVoidResponse](../../models/api-supplier-payment-void-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |