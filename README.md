# README

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|name|integer|null: false, unique: true|
|email|string|null: false, unique: true|
|encrypted_Password|string|null: false, unique: true|
|created_at|datetime|
### Association
- has_many :group, through: :members
- has_many :message

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|group_name|integer|null: :false|
|created_at|datetime|

### Association
- has_many :message
- has_many :user, through: :members


## messageテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false|
|user_id|integer|null: false|
|body|text|
|image|string|
|created_at|datetime|

### Association
- belongs_to :group
- belongs_to :user


