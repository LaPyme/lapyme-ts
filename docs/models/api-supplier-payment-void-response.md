# ApiSupplierPaymentVoidResponse

## Example Usage

```typescript
import { ApiSupplierPaymentVoidResponse } from "lapyme/models";

let value: ApiSupplierPaymentVoidResponse = {
  requestId: "<id>",
  data: {
    supplierPayment: {
      id: "92430f55-f225-4257-a15b-28ce143cbfc2",
      voided: false,
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `data`                                                                                            | [models.ApiSupplierPaymentVoidResponseData](../models/api-supplier-payment-void-response-data.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |