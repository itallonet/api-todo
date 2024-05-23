/**
 * @interface Task
 * Task data model
 */
export default interface Task {
    ID: Number;
    CreatedAt: Date;
    Name: String;
    Done: Boolean;
}