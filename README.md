# README

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true, add_index|
|group_id|integer|null: false, foreign_key: true, add_index|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, add_index|
|email|string|null: false, unique: true|
|encrypted_Password|string|null: false, unique: true|
### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: :false, add_index|

### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, add_index, foreign_key: true|
|user_id|integer|null: false, add_index, foreign_key: true|
|body|text|
|image|string|

### Association
- belongs_to :group
- belongs_to :user


