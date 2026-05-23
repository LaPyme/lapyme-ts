# GetApiWarehouseByIdResponse

## Example Usage

```typescript
import { GetApiWarehouseByIdResponse } from "lapyme/models/operations";

let value: GetApiWarehouseByIdResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "warehouse",
      id: "c74f0e8f-9a85-4cb9-b4e3-83dab617b228",
      name: "<value>",
      address: "91132 W Jefferson Street",
      isDefault: false,
      isActive: true,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [models.ApiWarehouseDetailResponse](../../models/api-warehouse-detail-response.md) | :heavy_check_mark:                                                                 | N/A                                                                                |