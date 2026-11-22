/**
 * <SlotPicker doctorId clinics onSelect />: Client Component ("use client").
 *
 * - A date strip for the next 14 days (clinic time zone, default Asia/Kolkata).
 * - Clinic selector when the doctor practises at several clinics.
 * - Fetches GET /api/x/express/doctors/:id/slots?date=&clinicId= (through the BFF proxy) on each
 *   date or clinic change and renders morning/evening groups of time buttons. Times are
 *   formatted with Intl.DateTimeFormat in the clinic's time zone.
 * - onSelect({ clinicId, startAt }): startAt is the exact ISO string from the API. The booking
 *   endpoint requires an exact slot match.
 * - Used on /doctors/[id], patient reschedule and /reception/book.
 *
 * PLACEHOLDER: not implemented yet.
 */
export {};
