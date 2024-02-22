const MessageSkeleton = () => {
    return (
        <div class="flex flex-col gap-4 w-52">
            <div class="flex gap-4 items-center">
                <div class="skeleton w-16 h-16 rounded-full shrink-0"></div>
                <div class="flex flex-col gap-4">
                    <div class="skeleton h-4 w-20"></div>
                    <div class="skeleton h-4 w-28"></div>
                </div>
            </div>
            <div class="skeleton h-32 w-full"></div>
        </div>
    );
};
export default MessageSkeleton;