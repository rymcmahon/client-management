json.array! @members.each do |member|
  json.id member.id
  json.first_name member.first_name
  json.last_name member.last_name
  json.street_address member.street_address
  json.city member.city
  json.state member.state
  json.zip member.zip
  json.email member.email
  json.phone member.phone
  json.membership member.membership
end