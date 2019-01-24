import Tasks from "./wrappers/tasks"
import Auth from "./wrappers/auth"
import Links from "./wrappers/links"
import Labels from "./wrappers/labels"
import Buckets from "./wrappers/buckets"
import Organizations from "./wrappers/organizations"

export default class Client {
  public links: Links
  public tasks: Tasks
  public auth: Auth
  public labels: Labels
  public buckets: Buckets
  public organizations: Organizations

  constructor(basePath: string) {
    this.tasks = new Tasks(basePath)
    this.auth = new Auth(basePath)
    this.links = new Links(basePath)
    this.labels = new Labels(basePath)
    this.buckets = new Buckets(basePath)
    this.organizations = new Organizations(basePath)
  }
}