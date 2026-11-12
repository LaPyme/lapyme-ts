# CreateApiProcessorCorrectionResponse

## Example Usage

```typescript
import { CreateApiProcessorCorrectionResponse } from "lapyme/models/operations";

let value: CreateApiProcessorCorrectionResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "processor_correction",
      id: "9b2fb705-20f7-47be-a067-bfbab74dd541",
    },
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                       | Record<string, *string*[]>                                                                                                      | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `result`                                                                                                                        | [operations.CreateApiProcessorCorrectionResponseBody](../../models/operations/create-api-processor-correction-response-body.md) | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |