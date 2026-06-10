type Props = {
    className?: string;
}

export default function CodePenIcon(props: Props) {
    const { className } = props;

    return (
        <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>CodePen</title>
            <path d="M12 0L1.608 6.242v11.516L12 24l10.392-6.242V6.242L12 0zm0 2.808l7.474 4.486-3.34 2.006L12 6.82 7.866 9.3 4.526 7.294 12 2.808zM3.608 9.067l2.3 1.38-2.3 1.38v-2.76zm0 5.866l4.248-2.55L12 14.87l4.144-2.487 4.248 2.55v1.693L12 21.672l-8.392-5.046v-1.693zm16.784-3.106l-2.3-1.38 2.3-1.38v2.76zM12 9.154l2.2 1.32L12 11.794l-2.2-1.32L12 9.154zm-4.092 2.454L12 14.062l4.092-2.454 2.3 1.38L12 16.826l-6.392-3.838 2.3-1.38z" />
        </svg>
    );
}