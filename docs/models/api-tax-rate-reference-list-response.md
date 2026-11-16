# ApiTaxRateReferenceListResponse

## Example Usage

```typescript
import { ApiTaxRateReferenceListResponse } from "lapyme/models";

let value: ApiTaxRateReferenceListResponse = {
  requestId: "<id>",
  data: [
    {
      object: "tax_rate_reference",
      code: 927159,
      percentage: 8999.77,
      description: "clamour vivid round headline pfft",
    },
  ],
  hasMore: false,
  nextCursor: null,
  object: "list",
  url: "https://rundown-lender.biz",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `requestId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [models.ApiTaxRateReferenceListResponseData](../models/api-tax-rate-reference-list-response-data.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `hasMore`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `nextCursor`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `object`                                                                                               | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)                               | :heavy_check_mark:                                                                                     | List-envelope discriminator.                                                                           |
| `url`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | Requested list path.                                                                                   |