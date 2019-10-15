[Azur Lane](../README.md) › [Globals](../globals.md) › [AzurLane](azurlane.md)

# Class: AzurLane

## Hierarchy

* **AzurLane**

## Index

### Constructors

* [constructor](azurlane.md#constructor)

### Properties

* [options](azurlane.md#options)

### Methods

* [buildInfo](azurlane.md#buildinfo)
* [ship](azurlane.md#ship)

## Constructors

###  constructor

\+ **new AzurLane**(`options?`: [IOptions](../interfaces/ioptions.md)): *[AzurLane](azurlane.md)*

*Defined in [index.ts:16](https://github.com/KurozeroPB/AzurLane/blob/3106872/lib/index.ts#L16)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [IOptions](../interfaces/ioptions.md) | Constructor options |

**Returns:** *[AzurLane](azurlane.md)*

## Properties

###  options

• **options**: *[IOptions](../interfaces/ioptions.md)*

*Defined in [index.ts:16](https://github.com/KurozeroPB/AzurLane/blob/3106872/lib/index.ts#L16)*

## Methods

###  buildInfo

▸ **buildInfo**(`time`: string): *Promise‹[IConstruction](../interfaces/iconstruction.md)›*

*Defined in [index.ts:63](https://github.com/KurozeroPB/AzurLane/blob/3106872/lib/index.ts#L63)*

Get ship names matching the given construction time

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`time` | string | The construction time |

**Returns:** *Promise‹[IConstruction](../interfaces/iconstruction.md)›*

___

###  ship

▸ **ship**(`name`: string): *Promise‹[IShip](../interfaces/iship.md)›*

*Defined in [index.ts:40](https://github.com/KurozeroPB/AzurLane/blob/3106872/lib/index.ts#L40)*

Get information about a ship by name

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the ship |

**Returns:** *Promise‹[IShip](../interfaces/iship.md)›*
