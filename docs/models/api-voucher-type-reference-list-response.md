# ApiVoucherTypeReferenceListResponse

## Example Usage

```typescript
import { ApiVoucherTypeReferenceListResponse } from "lapyme/models";

let value: ApiVoucherTypeReferenceListResponse = {
  requestId: "<id>",
  data: [
    {
      object: "voucher_type_reference",
      code: 208717,
      abbreviation: "<value>",
      documentKind: "invoice",
      letter: "A",
      description: "vaguely grouper finally interviewer educated",
    },
  ],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://artistic-pile.biz",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `data`                                                                                                         | [models.ApiVoucherTypeReferenceListResponseData](../models/api-voucher-type-reference-list-response-data.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `hasMore`                                                                                                      | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `nextCursor`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `object`                                                                                                       | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)                                       | :heavy_check_mark:                                                                                             | List-envelope discriminator.                                                                                   |
| `url`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Requested list path.                                                                                           |