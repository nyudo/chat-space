# README

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true,add_index|
|group_id|integer|null: false, foreign_key: true, add_index|

### Association
- belongs_to :group
- belongs_to :user

## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, unique: true|
|email|string|null: false, unique: true|
|encrypted_Password|string|null: false, unique: true|
### Association
- has_many :messages
- has_many :members
- has_many :group, through: :members

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|integer|null: :false|

### Association
- has_many :messages
- has_many :members
- has_many :user, through: :members

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, add_index|
|user_id|integer|null: false, add_index|
|body|text|
|image|string|

### Association
- belongs_to :group
- belongs_to :user


