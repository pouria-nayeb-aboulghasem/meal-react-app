type ErrorMessageProps = {
  error: string | null;
  onRefresh: () => void;
};

function ErrorMessage({ error, onRefresh }: ErrorMessageProps) {
  return (
    <div
      className="rounded-3xl border border-rose-200 bg-rose-50 px-6 py-10 text-center"
      role="alert"
    >
      <p className="font-semibold text-rose-900">
        We couldn't load your recipes
      </p>
      <p className="mt-2 text-sm text-rose-700">{error}</p>
      <button
        className="mt-5 rounded-xl bg-rose-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-800"
        onClick={onRefresh}
        type="button"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorMessage;
