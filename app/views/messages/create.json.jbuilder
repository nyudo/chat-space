  json.content  @message.content
  json.image  @message.image.url
  json.user_name  @message.user.name
  json.user_id @message.user.id
  json.created_at @message.created_at.to_s
