# ApiclearCheckResponse

## Example Usage

```typescript
import { ApiclearCheckResponse } from "lapyme/models";

let value: ApiclearCheckResponse = {
  requestId: "<id>",
  data: {
    object: "check",
    id: "b5e33a1e-a316-4b29-8b52-6f45a8868747",
    number: "<value>",
    bankName: "<value>",
    issuerName: "<value>",
    amount: 414601,
    currency: "USD",
    issueDate: new Date("2026-05-24"),
    dueDate: new Date("2024-04-24"),
    format: "electronic",
    origin: "third_party",
    status: "received",
    sourceReceiptId: "cc9e7f46-a180-46de-b3a3-f70c4b50cde4",
    supplierPaymentId: "e8090cfc-a42c-4f1c-9cec-2e01d3bd593a",
    checkDepositId: "19827edc-8083-43a0-948a-74167f0c6695",
    createdAt: new Date("2026-10-30T17:16:30.293Z"),
    updatedAt: new Date("2026-02-04T15:07:34.695Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjectf061a22803](../models/api-shared-objectf061a22803.md) | :heavy_check_mark:                                                           | N/A                                                                          |