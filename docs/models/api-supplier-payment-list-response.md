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

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `data`                                                                                                | [models.ApiSupplierPaymentListResponseData](../models/api-supplier-payment-list-response-data.md)[]   | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `hasMore`                                                                                             | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `nextCursor`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `object`                                                                                              | [models.ApiSupplierPaymentListResponseObject](../models/api-supplier-payment-list-response-object.md) | :heavy_check_mark:                                                                                    | List-envelope discriminator.                                                                          |
| `url`                                                                                                 | *string*                                                                                              | :heavy_check_mark:                                                                                    | Requested list path.                                                                                  |