# Validations

## Example Usage

```typescript
import { Validations } from "lapyme/models";

let value: Validations = {
  required: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `required`         | *boolean*          | :heavy_check_mark: | N/A                |
| `minLength`        | *number*           | :heavy_minus_sign: | N/A                |
| `maxLength`        | *number*           | :heavy_minus_sign: | N/A                |
| `min`              | *number*           | :heavy_minus_sign: | N/A                |
| `max`              | *number*           | :heavy_minus_sign: | N/A                |
| `options`          | *string*[]         | :heavy_minus_sign: | N/A                |