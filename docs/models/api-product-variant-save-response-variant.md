# ApiProductVariantSaveResponseVariant

## Example Usage

```typescript
import { ApiProductVariantSaveResponseVariant } from "lapyme/models";

let value: ApiProductVariantSaveResponseVariant = {
  id: "0d1ec422-6702-4a9e-b336-d6e26936367f",
  sku: "<value>",
  optionValues: {
    "key": "<value>",
  },
  metafields: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `sku`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `optionValues`                                                                 | Record<string, *string*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `metafields`                                                                   | [models.ApiSharedObject0347948139](../models/api-shared-object0347948139.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |