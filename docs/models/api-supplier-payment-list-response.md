# ApiSupplierPaymentListResponse

## Example Usage

```typescript
import { ApiSupplierPaymentListResponse } from "lapyme/models";

let value: ApiSupplierPaymentListResponse = {
  requestId: "<id>",
  data: [],
  hasMore: false,
  nextCursor: "<value>",
  object: "list",
  url: "https://responsible-thongs.org",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `data`                                                                                              | [models.ApiSupplierPaymentListResponseData](../models/api-supplier-payment-list-response-data.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `hasMore`                                                                                           | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `nextCursor`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `object`                                                                                            | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)                            | :heavy_check_mark:                                                                                  | List-envelope discriminator.                                                                        |
| `url`                                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | Requested list path.                                                                                |