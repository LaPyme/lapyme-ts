# UpdateApiTagResponse

## Example Usage

```typescript
import { UpdateApiTagResponse } from "lapyme/models/operations";

let value: UpdateApiTagResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      tag: {
        object: "tag",
        id: "0b804377-a96e-4bed-b5ae-43dfdb66f751",
        scope: "customer",
        name: "<value>",
        slug: "<value>",
        color: "amber",
        description: null,
        archivedAt: new Date("2024-08-05T18:16:05.940Z"),
        createdAt: new Date("2026-01-26T13:22:24.979Z"),
        updatedAt: new Date("2026-10-08T10:46:42.087Z"),
      },
    },
    warnings: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [models.ApiTagUpdateResponse](../../models/api-tag-update-response.md) | :heavy_check_mark:                                                     | N/A                                                                    |