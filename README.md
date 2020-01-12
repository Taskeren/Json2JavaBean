# Json2JavaBean
把Json示例转为JavaBean的Class（适用于API的制作）

## 使用示例

下面是一段 GitHubApi 中的用户信息。

```json
{
	"login": "nitu2003",
	"id": 17310943,
	"node_id": "MDQ6VXNlcjE3MzEwOTQz",
	"avatar_url": "https://avatars1.githubusercontent.com/u/17310943?v=4",
	"gravatar_id": "",
	"url": "https://api.github.com/users/nitu2003",
	"html_url": "https://github.com/nitu2003",
	"followers_url": "https://api.github.com/users/nitu2003/followers",
	"following_url": "https://api.github.com/users/nitu2003/following{/other_user}",
	"gists_url": "https://api.github.com/users/nitu2003/gists{/gist_id}",
	"starred_url": "https://api.github.com/users/nitu2003/starred{/owner}{/repo}",
	"subscriptions_url": "https://api.github.com/users/nitu2003/subscriptions",
	"organizations_url": "https://api.github.com/users/nitu2003/orgs",
	"repos_url": "https://api.github.com/users/nitu2003/repos",
	"events_url": "https://api.github.com/users/nitu2003/events{/privacy}",
	"received_events_url": "https://api.github.com/users/nitu2003/received_events",
	"type": "User",
	"site_admin": false
}
```

使用Json2JavaBean转换后得到的。

```java
@SerializedName(value = "login")
protected String login;

@SerializedName(value = "id")
protected Number id;

@SerializedName(value = "node_id")
protected String nodeId;

@SerializedName(value = "avatar_url")
protected String avatarUrl;

@SerializedName(value = "gravatar_id")
protected String gravatarId;

@SerializedName(value = "url")
protected String url;

@SerializedName(value = "html_url")
protected String htmlUrl;

@SerializedName(value = "followers_url")
protected String followersUrl;

@SerializedName(value = "following_url")
protected String followingUrl;

@SerializedName(value = "gists_url")
protected String gistsUrl;

@SerializedName(value = "starred_url")
protected String starredUrl;

@SerializedName(value = "subscriptions_url")
protected String subscriptionsUrl;

@SerializedName(value = "organizations_url")
protected String organizationsUrl;

@SerializedName(value = "repos_url")
protected String reposUrl;

@SerializedName(value = "events_url")
protected String eventsUrl;

@SerializedName(value = "received_events_url")
protected String receivedEventsUrl;

@SerializedName(value = "type")
protected String type;

@SerializedName(value = "site_admin")
protected Boolean siteAdmin;
```

稍作修改，把头尾补上。（一般IDE会自动创建）

```java
package cn.glycol.test;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class BeanUserGitHub {

  @SerializedName(value = "login")
  protected String login;

  @SerializedName(value = "id")
  protected Number id;

  @SerializedName(value = "node_id")
  protected String nodeId;

  @SerializedName(value = "avatar_url")
  protected String avatarUrl;

  @SerializedName(value = "gravatar_id")
  protected String gravatarId;

  @SerializedName(value = "url")
  protected String url;

  @SerializedName(value = "html_url")
  protected String htmlUrl;

  @SerializedName(value = "followers_url")
  protected String followersUrl;

  @SerializedName(value = "following_url")
  protected String followingUrl;

  @SerializedName(value = "gists_url")
  protected String gistsUrl;

  @SerializedName(value = "starred_url")
  protected String starredUrl;

  @SerializedName(value = "subscriptions_url")
  protected String subscriptionsUrl;

  @SerializedName(value = "organizations_url")
  protected String organizationsUrl;

  @SerializedName(value = "repos_url")
  protected String reposUrl;

  @SerializedName(value = "events_url")
  protected String eventsUrl;

  @SerializedName(value = "received_events_url")
  protected String receivedEventsUrl;

  @SerializedName(value = "type")
  protected String type;

  @SerializedName(value = "site_admin")
  protected Boolean siteAdmin;
}
```

就是一个完美的 JavaBean 了。
