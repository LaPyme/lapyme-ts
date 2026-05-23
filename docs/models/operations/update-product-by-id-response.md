# UpdateProductByIdResponse

## Example Usage

```typescript
import { UpdateProductByIdResponse } from "lapyme/models/operations";

let value: UpdateProductByIdResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "caf11fa4-ab5c-4a12-8ba4-d5c7c0e00b72",
      name: "<value>",
      description: "worth through so until",
      category: {
        id: "1b86fc91-7469-4d7f-aae2-2f02e86c0844",
        name: "<value>",
      },
      sku: "<value>",
      barcode: "<value>",
      oemCode: "<value>",
      currency: "Philippine Peso",
      cost: 1871.41,
      price: 9490.35,
      taxRate: {
        id: 7169.65,
        value: 4269.2,
      },
      stockMinimum: 7991.07,
      defaultSupplier: {
        id: "28063824-177e-4578-ab46-fd5e1f285eaf",
        name: "<value>",
      },
      productType: "product",
      isActive: false,
      organizationSlug: "<value>",
      createdAt: new Date("2026-04-18T02:31:39.339Z"),
      updatedAt: new Date("2025-01-11T03:31:32.853Z"),
    },
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `result`                                                                | [models.UpdateProductResponse](../../models/update-product-response.md) | :heavy_check_mark:                                                      | N/A                                                                     |