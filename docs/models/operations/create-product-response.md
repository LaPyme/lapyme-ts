# CreateProductResponse

## Example Usage

```typescript
import { CreateProductResponse } from "lapyme/models/operations";

let value: CreateProductResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "17bccae5-e0eb-445c-9cf4-6dac9bc66de2",
      name: "<value>",
      description: "shyly icebreaker duh to rise scarper",
      category: null,
      sku: "<value>",
      barcode: "<value>",
      oemCode: "<value>",
      currency: "Kip",
      cost: 7204.77,
      price: 3759.86,
      taxRate: {
        id: 4683.96,
        value: 8847.4,
      },
      stockMinimum: 4019.19,
      defaultSupplier: {
        id: "c2b863a4-5110-4cd3-8f6a-9ba8dd5142f8",
        name: "<value>",
      },
      productType: "service",
      isActive: false,
      organizationSlug: "<value>",
      createdAt: new Date("2026-03-11T08:41:45.264Z"),
      updatedAt: new Date("2024-09-15T01:42:40.898Z"),
    },
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `result`                                                                | [models.CreateProductResponse](../../models/create-product-response.md) | :heavy_check_mark:                                                      | N/A                                                                     |